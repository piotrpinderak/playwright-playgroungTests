import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('ppwg1983@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Strategia0#');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' My account' }).click();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});