import { test, expect } from "@playwright/test";

test("Multi select not all options", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  
  //Arrange
  const multiselect = page.locator('#multi-select');
  const states = ["California","New Jersey","Ohio","Pennsylvania","Washington","New York"];

  // Act
  await multiselect.selectOption(states);

  //Assert
  await expect(multiselect.locator('option:checked')).toHaveCount(states.length);

  for(const state of states) {
    await expect(multiselect.locator(`option[value="${state}"]:checked`)).toHaveCount(1);
  }
});