import { test, expect, request, Page, Locator } from "@playwright/test";

test("register process with valid data stores data correctly", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("checkbox", { name: "I have read the whole term sheet and agree" }).check();
  await page.getByRole("textbox", { name: "First Name" }).fill("gil");
  await page.getByRole("textbox", { name: "Last Name" }).fill("zilberfeld");
  await page.getByRole("textbox", { name: "Email" }).fill("gil@testingil.com");
  await page.getByRole("button", { name: "Register" }).click();
  await expect(page.getByText("Thank you, gil!")).toBeVisible();

  const apiRequestContext = await request.newContext();
  const response = await apiRequestContext.get("/api/all");
  const json = await response.json();

  const expectedEntry = { info: 
    { firstName: "gil", 
      lastName: "zilberfeld", 
      email: "gil@testingil.com" }, promotions: true };
  expect(json.registrants[json.registrants.length - 1]).toStrictEqual(expectedEntry);
});

