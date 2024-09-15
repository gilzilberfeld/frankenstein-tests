import { test } from "@playwright/test";
import { checkTermsBox, clickRegister } from "./actions";
import { lastSavedEntryShouldInclude } from "./asserts";
import { shouldDisplayThankYouWithName } from "./asserts";
import { fillFirstName } from "./actions";
import { fillLastName } from "./actions";
import { fillEmail } from "./actions";

test("register process with valid data stores data correctly", async ({ page }) => {
  await page.goto("/");
  await checkTermsBox(page);

  await fillFirstName(page, "gil");
  await fillLastName(page, "zilberfeld");
  await fillEmail(page, "gil@testingil.com");
  
  await clickRegister(page)
  await shouldDisplayThankYouWithName(page);

  await lastSavedEntryShouldInclude(
    { firstName: "gil", 
      lastName: "zilberfeld", 
      email: "gil@testingil.com" }, true);
});



