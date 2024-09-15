import { test } from "@playwright/test";
import { lastSavedEntryShouldInclude } from "./asserts";
import { ANY_FIRST_NAME, ANY_LAST_NAME, ANY_VALID_EMAIL as VALID_EMAIL } from "./consts";
import { PageFactory } from "./page_objects/pagefactory";

test("register process with valid data stores data correctly", async ({ page }) => {
  const registerPage = await PageFactory.createRegistrationPage(page);
  await registerPage.agreeToTerms();

  await registerPage.firstNameIs(ANY_FIRST_NAME)
  await registerPage.lastNameIs(ANY_LAST_NAME)
  await registerPage.emailIs(VALID_EMAIL)

  const thankYou = await registerPage.submit()
  await thankYou.displaysThankYouWith(ANY_FIRST_NAME)

  await lastSavedEntryShouldInclude(
    { firstName: ANY_FIRST_NAME, 
      lastName: ANY_LAST_NAME, 
      email: VALID_EMAIL }, true);
});
