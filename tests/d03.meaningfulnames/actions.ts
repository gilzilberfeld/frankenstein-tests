import { Page } from "@playwright/test";
import { getEmailTextBox, getFirstNameTextBox, getLastNameTextBox, getRegisterButton, getTermsCheckBox } from "./locators";

export function typeAnythingInEmail(page: Page) {
  return getEmailTextBox(page).fill("a");
}
export function typeAnythingInLastName(page: Page) {
  return getLastNameTextBox(page).fill("a");
}
export function typeAnythingInFirstName(page: Page) {
  return getFirstNameTextBox(page).fill("a");
}
export function clickRegister(page: Page) {
  return getRegisterButton(page).click();
}
export function uncheckTermsBox(page: Page) {
  return getTermsCheckBox(page).uncheck();
}
export function checkTermsBox(page: Page) {
  return getTermsCheckBox(page).check();
}
export function fillFirstName(page: Page, text: string) {
  return getFirstNameTextBox(page).fill(text);
}
export function fillLastName(page: Page, text: string) {
  return getLastNameTextBox(page).fill(text);
}
export function fillEmail(page: Page, text: string) {
  return getEmailTextBox(page).fill(text);
}
