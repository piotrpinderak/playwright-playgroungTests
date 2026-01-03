import { test, expect } from '@playwright/test';

test('Locators on registration form', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    //Arrange "First Name Label" 
    const FirstNameA = page.getByLabel(`First Name`);
    const FirstNameB = page.getByRole(`textbox`, { name: `First Name` });
    const FirstNameLabel = page.locator(`label[for="input-firstname"]`);

    //Assert "First Name Label"
    await expect(FirstNameA).toBeVisible();
    await expect(FirstNameB).toBeVisible();
    await expect(FirstNameLabel).toContainText(`First Name`);

    //Arrange "First Name Placeholder"
    const FirstNameInput = page.getByLabel(`First Name`);

    // Assert "First Name Placeholder"
    await expect(FirstNameInput).toHaveAttribute(`placeholder`, `First Name`);

});