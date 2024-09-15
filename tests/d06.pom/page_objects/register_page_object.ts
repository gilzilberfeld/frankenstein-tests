import { Locator, Page, expect } from "@playwright/test";
import { ANY_INPUT, REGISTRATION_PAGE } from "../consts";
import { ThankYouPage } from "./thank_you_page";

const TITLE = "Register to the magnificent Newsletter!";
const FIRST_NAME_ID = "First Name";
const LAST_NAME_ID = "Last Name";
const EMAIL_ID = "Email";
const PROMOTIONS_ID = "I want to get promotions too!";
const TERMS_ID = "I have read the whole term sheet and agree";
const BUTTON_ID = "Register";
const VALIDATION_MESSAGE = "Please make sure all fields are filled correctly.";

export class RegisterPage {
  
  page: Page;
  title: Locator;
  firstNameBox: Locator;
  lastNameBox: Locator;
  emailBox: Locator;
  promotionCheckBox: Locator;
  termsCheckBox: Locator;
  registerButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
  }
  
  async initialize() {
    await this.page.goto(REGISTRATION_PAGE);
    this.title = this.page.getByText(TITLE);
    this.firstNameBox = this.page.getByRole("textbox", { name: FIRST_NAME_ID });
    this.lastNameBox = this.page.getByRole("textbox", { name: LAST_NAME_ID });
    this.emailBox = this.page.getByRole("textbox", { name: EMAIL_ID });
    this.promotionCheckBox = this.page.getByRole("checkbox", { name: PROMOTIONS_ID });
    this.termsCheckBox = this.page.getByRole("checkbox", { name: TERMS_ID });
    this.registerButton = this.page.getByRole("button", { name: BUTTON_ID });
  }
  
  async lastNameIs(text: string) {
    await this.lastNameBox.fill(text);
  }
  async firstNameIs(text: string) {
    await this.firstNameBox.fill(text);
  }
  async emailIs(text: string) {
    await this.emailBox.fill(text);
  }
  async typeAnythingInEmail() {
    await this.emailBox.fill(ANY_INPUT);
  }
  async typeAnythingInLastName() {
    await this.lastNameBox.fill(ANY_INPUT);
  }
  async typeAnythingInFirstName() {
    await this.firstNameBox.fill(ANY_INPUT);
  }
  
  async registerWithInvalidData() {
    await this.registerButton.click();
  }
  
  async submit(): Promise<ThankYouPage> {
    await this.registerButton.click();
    return new ThankYouPage(this.page);
  }
  
  async doNotAgreeToTerms() {
    await this.termsCheckBox.uncheck();
  }
  async agreeToTerms() {
    await this.termsCheckBox.check();
  }
  
  async errorMsg(): Promise<Locator> {
    return this.page.getByText(VALIDATION_MESSAGE);
  }
  
  async displaysTitle() {
    await expect(this.title).toBeVisible();
  }
  
  async termsNotAgreedTo() {
    await expect(this.termsCheckBox).not.toBeChecked();
  }
  async promotionsRequested() {
    await expect(this.promotionCheckBox).toBeChecked();
  }
  async cannotSubmit() {
    await expect(this.registerButton).toBeDisabled();
  }
  async canSubmit() {
    await expect(this.registerButton).toBeEnabled();
  }

  async inputsAreEmpty() {
    await expect(this.firstNameBox).toBeEmpty();
    await expect(this.lastNameBox).toBeEmpty();
    await expect(this.emailBox).toBeEmpty();
  }

  async hidesError() {
    const errorMessage = await this.errorMsg();
    await expect( errorMessage).toBeHidden();
  }
  async displaysError() {
    const errorMessage = await this.errorMsg();
    await expect( errorMessage).toBeVisible();
  }
}
