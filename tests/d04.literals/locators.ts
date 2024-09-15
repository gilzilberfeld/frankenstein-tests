import { Page, Locator } from "@playwright/test";
import { ANY_FIRST_NAME } from "./consts";

const TITLE = "Register to the magnificent Newsletter!";
const FIRST_NAME_ID = "First Name";
const LAST_NAME_ID = "Last Name";
const EMAIL_ID = "Email";
const PROMOTIONS_ID = "I want to get promotions too!";
const TERMS_ID = "I have read the whole term sheet and agree";
const BUTTON_ID = "Register";
const VALIDATION_MESSAGE = "Please make sure all fields are filled correctly.";
const THANK_YOU = "Thank you, ";
const THANK_YOU_ERROR = "Who Are You?";

export function getTitle(page: Page): Locator {
  return page.getByText(TITLE);
}
export function getFirstNameTextBox(page: Page): Locator {
  return page.getByRole("textbox", { name: FIRST_NAME_ID });
}
export function getLastNameTextBox(page: Page): Locator {
  return page.getByRole("textbox", { name: LAST_NAME_ID });
}
export function getEmailTextBox(page: Page): Locator {
  return page.getByRole("textbox", { name: EMAIL_ID });
}
export function getPromotionsCheckBox(page: Page): Locator {
  return page.getByRole("checkbox", { name: PROMOTIONS_ID });
}
export function getTermsCheckBox(page: Page): Locator {
  return page.getByRole("checkbox", { name: TERMS_ID });
}
export function getRegisterButton(page: Page): Locator {
  return page.getByRole("button", { name: BUTTON_ID });
}
export function getErrorMessage(page: Page): Locator {
  return page.getByText(VALIDATION_MESSAGE);
}
export function getThankYouMessage(page: Page): Locator {
  const thankYouMessage = THANK_YOU + ANY_FIRST_NAME +'!';
  return page.getByText(thankYouMessage);
}
export function getThankYouErrorMessage(page: Page): Locator {
  return page.getByText(THANK_YOU_ERROR);
}
