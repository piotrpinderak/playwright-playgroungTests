import { test, expect } from "@playwright/test";

test("Multi select all options", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  
  //Arrange
  const states = ["California","Florida","New Jersey","New York","Ohio","Texas","Pennsylvania","Washington"];

  // Act
  await page.locator('#multi-select').selectOption(states);

  // Assert (toHaveValues sprawdza tablice 1:1, również kolejność)

  await expect(page.locator('#multi-select')).toHaveValues(states);

});