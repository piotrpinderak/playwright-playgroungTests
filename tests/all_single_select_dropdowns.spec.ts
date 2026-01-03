import { test, expect } from "@playwright/test";

test("Handling All Single Select Dropdowns", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  
  //Arrange

  const days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ];

  const daySelect = page.locator('#select-demo');
  
  // Act and Assert

  for(const day of days) {
    await test.step(`Selecting day: ${day}`, async () => {
      await daySelect.selectOption(day);
      await expect(daySelect).toHaveValue(day);
    });
  }

});