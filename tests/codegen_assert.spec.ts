import { test, expect } from '@playwright/test';

test('test assert', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search Criteria' }).click();
  await page.getByRole('textbox', { name: 'Search Criteria' }).fill('apple');
  await page.locator('#button-search').click();
  await expect(page.locator('#mz-product-grid-image-34-212469')).toBeVisible();
  await page.locator('#mz-product-grid-image-34-212469').click();
  await page.getByRole('heading', { name: 'iPod Shuffle' }).click();
  await expect(page.getByRole('spinbutton', { name: 'Qty' })).toHaveValue('1');
});