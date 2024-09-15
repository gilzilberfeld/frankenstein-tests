import { test } from "@playwright/test";
import { checkTermsBox as agreeToTerms, clickRegister as submit, fillEmail as emailIs, fillFirstName as firstNameIs, fillLastName as lastNameIs } from "./actions";
import { lastSavedEntryShouldInclude, shouldDisplayThankYouWithName as displaysThankYouWith } from "./asserts";
import { ANY_FIRST_NAME, ANY_LAST_NAME, REGISTRATION_PAGE, VALID_EMAIL } from "./consts";

test("register process with valid data stores data correctly", async ({ page }) => {
  await page.goto(REGISTRATION_PAGE);
  await agreeToTerms(page);

  await firstNameIs(page, ANY_FIRST_NAME);
  await lastNameIs(page, ANY_LAST_NAME);
  await emailIs(page, VALID_EMAIL);

  await submit(page);
  await displaysThankYouWith(page, ANY_FIRST_NAME);

  await lastSavedEntryShouldInclude(
    { firstName: ANY_FIRST_NAME, 
      lastName: ANY_LAST_NAME, 
      email: VALID_EMAIL }, true);
});
