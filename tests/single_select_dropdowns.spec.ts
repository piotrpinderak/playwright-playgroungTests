import { test, expect } from "@playwright/test";

test("Handling Single Select Dropdowns", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  
  //Arrange
  const daySelect = page.locator('#select-demo');

  // Act
  await daySelect.selectOption('Tuesday');

  // Assert
  await expect(daySelect).toHaveValue('Tuesday');
});