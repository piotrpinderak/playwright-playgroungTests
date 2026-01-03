import { test, expect } from "@playwright/test";

test("Handling radio buttons", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/radiobutton-demo"
  );

  //Arrange
  const radios = page.locator(`input[name="optradio"]`);

  //Assert
  await expect(radios.first()).not.toBeChecked();
  await expect(radios.nth(1)).not.toBeChecked();

  //Act
  await radios.first().click();

  //Assert
  await expect(radios.first()).toBeChecked();
  await expect(radios.nth(1)).not.toBeChecked();

});