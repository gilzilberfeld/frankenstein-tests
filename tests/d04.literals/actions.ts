import { Page } from "@playwright/test";
import { getEmailTextBox, getFirstNameTextBox, getLastNameTextBox, getRegisterButton, getTermsCheckBox } from "./locators";
import { ANY_INPUT } from "./consts";

export function typeAnythingInEmail(page: Page) {
  return getEmailTextBox(page).fill(ANY_INPUT);
}
export function typeAnythingInLastName(page: Page) {
  return getLastNameTextBox(page).fill(ANY_INPUT);
}
export function typeAnythingInFirstName(page: Page) {
  return getFirstNameTextBox(page).fill(ANY_INPUT);
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
