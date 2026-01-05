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
    const emailGroup = emailLabel.locator('..');

    // Assert label
    await expect(emailInput).toBeVisible();
    await expect(emailLabel).toHaveText('E-Mail');

    // Assert placeholder
    await expect(emailInput).toHaveAttribute('placeholder', 'E-Mail');

    // Assert required star 
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
    const helpText = page.locator(`#input-telephone-help`);
    const telephoneGroup = telephoneLabel.locator('..');

    // Assert label
    await expect(telephoneInput).toBeVisible();
    await expect(telephoneLabel).toHaveText('Telephone');

    // Assert required star
    await expect(telephoneGroup).toHaveClass(/required/);
    
    // Assert placeholder
    await expect(telephoneInput).toHaveAttribute('placeholder', 'Telephone');

    // Act
    await telephoneInput.fill('123456789');

    // Assert value
    await expect(telephoneInput).toHaveValue('123456789');

    //Assert helpText
    await expect(helpText).toHaveText(`Enter valid phone number with country code!`)

    // ---------------------------
    // PASSWORD
    // ---------------------------

    //Arrange
    const yourPassword = page.getByText(`Your Password`);
    const passwordInput = page.getByLabel(`Password`, { exact: true });
    const passwordLabel = page.locator(`label[for="input-password"]`)
    const passwordGroup = passwordLabel.locator(`..`);

    //Assert value
    await expect(yourPassword).toHaveText(`Your Password`);

    //Assert label
    await expect(passwordInput).toBeVisible();
    await expect(passwordLabel).toHaveText(`Password`);

    //Assert required star
    await expect(passwordGroup).toHaveClass(/required/);

    //Act
    await passwordLabel.fill(`zxcvbnm`);

    //Assert
    await expect(passwordLabel).toHaveValue(`zxcvbnm`);

    //Assert placeholder
    await expect(passwordInput).toHaveAttribute(`placeholder`, `Password`);

    // ---------------------------
    // PASSWORD CONFIRM
    // ---------------------------

    //Arrange
    const passwordConfirmInput = page.getByLabel(`Password Confirm`, { exact: true });
    const passwordConfirmLabel = page.locator(`label[for="input-confirm"]`);

    //Assert label
    await expect(passwordConfirmInput).toBeVisible();
    await expect(passwordConfirmLabel).toHaveText(`Password Confirm`);

    //Act
    await passwordConfirmInput.fill(`zxcvbnm`);

    //Assert
    await expect(passwordConfirmInput).toHaveValue(`zxcvbnm`);

    //Assert placeholder
    await expect(passwordConfirmInput).toHaveAttribute(`placeholder`, `Password Confirm`);

    // ---------------------------
    // NEWSLETTER
    // ---------------------------

    //Arrange
    const newsletter = page.locator('fieldset legend', {hasText: `Newsletter`});

    //Assert
    await expect(newsletter).toBeVisible();
    await expect(newsletter).toHaveText(`Newsletter`);

    // ---------------------------
    // SUBSCRIBE
    // ---------------------------

    //Arrange
    const subscribe = page.locator('fieldset label', { hasText: `Subscribe` });
    const radioButtonYes = page.getByText('Yes', { exact: true });
    const radioButtonNo = page.getByText(`No`, { exact: true });

    //Assert visibility
    await expect(subscribe).toBeVisible();
    await expect(subscribe).toHaveText('Subscribe');
    await expect(radioButtonYes).toBeVisible();
    await expect(radioButtonNo).toBeVisible();

    //Assert selection - default state
    await expect(radioButtonYes).not.toBeChecked();
    await expect(radioButtonNo).toBeChecked();

    //Act - change selection
    await radioButtonYes.click();

    //Assert after change
    await expect(radioButtonYes).toBeChecked();
    await expect(radioButtonNo).not.toBeChecked();






 
});