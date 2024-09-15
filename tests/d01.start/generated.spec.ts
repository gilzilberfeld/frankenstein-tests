import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('gil');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('zilberfeld');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Email').fill('gil@testingil.com');
  await page.getByText('I have read the whole term').click();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('main')).toContainText('Thank you, gil!');
});