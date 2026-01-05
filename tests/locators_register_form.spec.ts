import { test, expect } from '@playwright/test';

test('Locators on registration form', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // ---------------------------
    // FIRST NAME
    // ---------------------------

    // Arrange
    const firstNameInput = page.getByLabel('First Name');
    const firstNameLabel = page.locator('label[for="input-firstname"]');

    // Assert label
    await expect(firstNameInput).toBeVisible();
    await expect(firstNameLabel).toHaveText('First Name');

    // Assert placeholder
    await expect(firstNameInput).toHaveAttribute('placeholder', 'First Name');

    // Assert required star
    const firstNameGroup = firstNameLabel.locator('..'); 
    await expect(firstNameGroup).toHaveClass(/required/);

    // Act
    await firstNameInput.fill('Piotr');

    // Assert value
    await expect(firstNameInput).toHaveValue('Piotr');


    // ---------------------------
    // LAST NAME
    // ---------------------------

    // Arrange
    const lastNameInput = page.getByLabel('Last Name');
    const lastNameLabel = page.locator('label[for="input-lastname"]');

    // Assert label
    await expect(lastNameInput).toBeVisible();
    await expect(lastNameLabel).toHaveText('Last Name');

    // Assert placeholder
    await expect(lastNameInput).toHaveAttribute('placeholder', 'Last Name');

    // Assert required star
    const lastNameGroup = lastNameLabel.locator('..'); 
    await expect(lastNameGroup).toHaveClass(/required/);

    // Act
    await lastNameInput.fill('Pinderak');

    // Assert value
    await expect(lastNameInput).toHaveValue('Pinderak');


    // ---------------------------
    // EMAIL
    // ---------------------------

    // Arrange
    const emailInput = page.getByLabel('E-Mail');
    const emailLabel = page.locator('label[for="input-email"]');

    // Assert label
    await expect(emailInput).toBeVisible();
    await expect(emailLabel).toHaveText('E-Mail');

    // Assert placeholder
    await expect(emailInput).toHaveAttribute('placeholder', 'E-Mail');

    // Assert required star
    const emailGroup = emailLabel.locator('..'); 
    await expect(emailGroup).toHaveClass(/required/);

    // Act
    await emailInput.fill('abc@gmail.com');

    // Assert value
    await expect(emailInput).toHaveValue('abc@gmail.com');


    // ---------------------------
    // TELEPHONE
    // ---------------------------

    // Arrange
    const telephoneInput = page.getByLabel('Telephone');
    const telephoneLabel = page.locator('label[for="input-telephone"]');

    // Assert label
    await expect(telephoneInput).toBeVisible();
    await expect(telephoneLabel).toContainText('Telephone');

    // Assert required star
    const telephoneGroup = telephoneLabel.locator('..'); 
    await expect(telephoneGroup).toHaveClass(/required/);
    
    // Assert placeholder
    await expect(telephoneInput).toHaveAttribute('placeholder', 'Telephone');

    // Act
    await telephoneInput.fill('123456789');

    // Assert value
    await expect(telephoneInput).toHaveValue('123456789');
});
