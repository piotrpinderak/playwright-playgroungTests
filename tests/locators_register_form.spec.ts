import { test, expect } from '@playwright/test';

test('Locators on registration form', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    //Arrange "First Name" (label)
    const FirstNameA = page.getByLabel(`First Name`);
    const FirstNameB = page.getByRole(`textbox`, { name: `First Name` });
    const FirstNameLabel = page.locator(`label[for="input-firstname"]`);

    //Assert "First Name" label
    await expect(FirstNameA).toBeVisible();
    await expect(FirstNameB).toBeVisible();
    await expect(FirstNameLabel).toContainText(`First Name`);

    //Arrange "First Name Placeholder"
    const FirstNameInput = page.getByLabel(`First Name`);    

    // Assert empty "First Name Placeholder"
    await expect(FirstNameInput).toHaveAttribute(`placeholder`, `First Name`);

    //Act fill "First Name" Placeholder
    await FirstNameInput.fill(`Piotr`);
    await FirstNameLabel.fill(`PIOTR`);

    //Assert "First Name"
    await expect(FirstNameLabel).toHaveValue('PIOTR');

    //Arrange "Last Name" label
    const LastNameA = page.getByLabel(`Last Name`);
    const LastNameB = page.getByRole('textbox', {name: `Last Name` });
    const LastNameLabel = page.locator(`label[for="input-lastname"]`);

    //Assert "Last Name" label
    await expect(LastNameA).toBeVisible();
    await expect(LastNameB).toBeVisible();
    await expect(LastNameLabel).toContainText(`Last Name`);


    
    

});