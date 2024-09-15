import { test, expect } from "@playwright/test";

test("Guru99 Demo  - register and check flights", async ({ page }) => {
  await page.goto("https://demo.guru99.com/test/newtours/register.php");
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill("Jim");
  await page.locator('input[name="firstName"]').press("Tab");
  await page.locator('input[name="lastName"]').fill("Smith");
  await page.locator('input[name="lastName"]').press("Tab");
  await page.locator('input[name="phone"]').press("Tab");
  await page.locator("#userName").fill("jimsmith@google.com");
  await page.locator("#userName").press("Tab");
  await page.locator('input[name="address1"]').click();
  await page.locator('input[name="address1"]').fill("19 Hope st.");
  await page.locator('input[name="address1"]').press("Tab");
  await page.locator('input[name="city"]').fill("New York City");
  await page.locator('input[name="city"]').press("Tab");
  await page.locator('input[name="state"]').fill("New York");
  await page.locator('input[name="state"]').press("Tab");
  await page.locator('input[name="postalCode"]').press("Tab");
  await page.selectOption('select[name="country"]', "UNITED STATES");
  await page.locator("#email").click();
  await page.locator("#email").fill("jimsmith@google.com");
  await page.locator("#email").press("Tab");
  await page.locator('input[name="password"]').fill("pwd");
  await page.locator('input[name="password"]').press("Tab");
  await page.locator('input[name="confirmPassword"]').fill("pwd");
  await expect(page.getByRole("button", { name: "submit" })).toBeEnabled();
  await page.getByRole("button", { name: "submit" }).click();

  await expect(page.getByText("Dear Jim Smith")).toBeVisible();
  await expect(page.getByText("Note: Your user name is jimsmith@google.com.")).toBeVisible();
  await page.getByRole("link", { name: "sign-in" }).click();

  await page.locator('input[name="userName"]').click();
  await page.locator('input[name="userName"]').fill("jimsmith@google.com");
  await page.locator('input[name="userName"]').press("Tab");
  await page.locator('input[name="password"]').fill("pwd");
  await page.getByRole("button", { name: "submit" }).click();
  
  await expect(page.getByText("Login Successfully")).toBeVisible();
  await expect(page.getByText("Thank you for Loggin.")).toBeVisible();
  await page.getByRole("link", { name: "Flights" }).click();
  
  await page.goto("https://demo.guru99.com/test/newtours/index.php");
  await expect(page.locator("p:nth-child(4) > img")).toBeVisible();
  await expect(page.getByText("Atlanta to Las Vegas")).toBeVisible();
  await expect(page.getByText("Boston to San Francisco")).toBeVisible();
  await expect(page.getByText("Phoenix to San Francisco")).toBeVisible();
  await expect(page.getByText("New York to Chicago")).toBeVisible();
  await expect(page.getByText("Los Angeles to Chicago")).toBeVisible();
  await expect(page.getByText("$398")).toBeVisible();
  await expect(page.getByText("$513")).toBeVisible();
  await expect(page.getByText("$168")).toBeVisible();
  await expect(page.getByText("$198")).toBeVisible();
  await expect(page.getByText("$213")).toBeVisible();
  
  await expect(page.getByRole("link", { name: "Cruises" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Vacations" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Hotels" })).toBeVisible();
  await expect(page.getByRole("link", { name: "CONTACT" })).toBeVisible();
  await expect(page.getByRole("link", { name: "SIGN-ON" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Salon Travel" })).toBeVisible();
  
  await page.goto("https://demo.guru99.com/test/newtours/reservation.php");
  await page.getByRole('radio').nth(1).check();
  await page.locator("select[name=\"passCount\"]").selectOption("3");
  await page.locator("select[name=\"fromDay\"]").selectOption("16");
  await page.locator("select[name=\"fromMonth\"]").selectOption("9");
  await page.locator("select[name=\"toPort\"]").selectOption("Paris");
  await page.locator("select[name=\"toMonth\"]").selectOption("9");
  await page.locator("select[name=\"toDay\"]").selectOption("17");
  await page.getByText("Economy class Business class").click();
  await page.getByRole('radio').nth(3).check();
  await page.getByRole("button", { name: "Submit" }).click();
  
  await expect(page.getByText("After flight finder - No Seats Avaialble")).toBeVisible();
  await page.goto("https://demo.guru99.com/test/newtours/index.php");
  await expect(page.getByRole("link", { name: "your destination" })).toBeVisible();
  await expect(page.getByRole("link", { name: "featured vacation destinations" })).toBeVisible();
  await expect(page.getByText("Registered users can sign-in here to find the lowest fare on participating airlines.")).toBeVisible();
  await expect(page.getByText("Always carry a travel first aid kit with bandages, antacids, aspirin, bee sting wipes, and other basic necessities.")).toBeVisible();


});
