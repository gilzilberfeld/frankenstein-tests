import { Page, Locator } from "@playwright/test";

export function getTitle(page: Page): Locator {
  return page.getByText("Register to the magnificent Newsletter!");
}export function getFirstNameTextBox(page: Page): Locator {
  return page.getByRole("textbox", { name: "First Name" });
}
export function getLastNameTextBox(page: Page): Locator {
  return page.getByRole("textbox", { name: "Last Name" });
}
export function getEmailTextBox(page: Page): Locator {
  return page.getByRole("textbox", { name: "Email" });
}
export function getPromotionsCheckBox(page: Page): Locator {
  return page.getByRole("checkbox", { name: "I want to get promotions too!" });
}
export function getTermsCheckBox(page: Page): Locator {
  return page.getByRole("checkbox", { name: "I have read the whole term sheet and agree" });
}
export function getRegisterButton(page: Page): Locator {
  return page.getByRole("button", { name: "Register" });
}
export function getErrorMessage(page: Page): Locator {
  return page.getByText("Please make sure all fields are filled correctly.");
}
export function getThankYouMessage(page: Page): Locator {
  return page.getByText("Thank you, gil!");
}
export function getThankYouErrorMessage(page: Page): Locator {
  return page.getByText('Who Are You?');
}

