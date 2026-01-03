import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qaautomationlabs.com/');

  await page.getByRole('link', { name: 'Read More' }).nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  const page1 = await page1Promise;
  await page.locator('span').nth(3).click();
  await page.getByRole('link', { name: '/ Courses' }).click();
  await page.getByRole('link', { name: 'Events', exact: true }).click();
});