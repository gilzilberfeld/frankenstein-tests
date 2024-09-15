import { Page, expect, request } from "@playwright/test";
import {
  getEmailTextBox,
  getErrorMessage,
  getFirstNameTextBox,
  getLastNameTextBox,
  getPromotionsCheckBox,
  getRegisterButton,
  getTermsCheckBox,
  getThankYouErrorMessage,
  getThankYouMessage,
  getTitle,
} from "./locators";
import { API_GET_ALL } from "./consts";

export function shouldClearError(page: Page) {
  return expect(getErrorMessage(page)).not.toBeVisible();
}
export function errorShouldBeVisible(page: Page) {
  return expect(getErrorMessage(page)).toBeVisible();
}
export function buttonShouldBeDisabled(page: Page) {
  return expect(getRegisterButton(page)).toBeDisabled();
}
export function buttonShouldBeEnabled(page: Page) {
  return expect(getRegisterButton(page)).toBeEnabled();
}
export function promotionsBoxShouldBeChecked(page: Page) {
  return expect(getPromotionsCheckBox(page)).toBeChecked();
}
export async function allInputsShouldBeEmpty(page: Page) {
  await expect(getFirstNameTextBox(page)).toBeEmpty();
  await expect(getLastNameTextBox(page)).toBeEmpty();
  await expect(getEmailTextBox(page)).toBeEmpty();
}
export function shouldSeeTitle(page: Page) {
  return expect(getTitle(page)).toBeVisible();
}
export function termsBoxShouldBeUnchecked(page: Page) {
  return expect(getTermsCheckBox(page)).not.toBeChecked();
}
export function shouldDisplayThankYouError(page: Page) {
  return expect(getThankYouErrorMessage(page)).toBeVisible();
}
export async function lastSavedEntryShouldInclude(info: any, promotions: boolean) {
  const apiRequestContext = await request.newContext();
  const response = await apiRequestContext.get(API_GET_ALL);
  const json = await response.json();

  const expectedEntry = { info, promotions };
  expect(json.registrants[json.registrants.length - 1]).toStrictEqual(expectedEntry);
}
export function shouldDisplayThankYouWithName(page: Page) {
  return expect(getThankYouMessage(page)).toBeVisible();
}
