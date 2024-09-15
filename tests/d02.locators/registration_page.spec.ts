import { expect, request, test } from "@playwright/test";
import { getEmailTextBox, getFirstNameTextBox, getLastNameTextBox, getRegisterButton, getTermsCheckBox, getThankYouMessage } from "./locators";

test("register process with valid data stores data correctly", async ({ page }) => {
  await page.goto("/");
  await getTermsCheckBox(page).check();
  await getFirstNameTextBox(page).fill("gil");
  await getLastNameTextBox(page).fill("zilberfeld");
  await getEmailTextBox(page).fill("gil@testingil.com");
  await getRegisterButton(page).click();
  await expect(getThankYouMessage(page)).toBeVisible();

  const apiRequestContext = await request.newContext();
  const response = await apiRequestContext.get("/api/all");
  const json = await response.json();

  const expectedEntry = { info: 
    { firstName: "gil", 
      lastName: "zilberfeld", 
      email: "gil@testingil.com" }, promotions: true };
  expect(json.registrants[json.registrants.length - 1]).toStrictEqual(expectedEntry);
});




