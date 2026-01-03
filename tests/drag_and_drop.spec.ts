import { test, expect } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
  );

  //Arrange
  const drag1 = page.getByText("Draggable 1");
  const drag2 = page.getByText("Draggable 2");
  const drop = page.locator("#mydropzone");

  //Act
  await drag1.dragTo(drop);
  await drag2.dragTo(drop);

  //Assert
  await expect(page.locator(`#todrag span`)).toHaveCount(0);
  await expect(page.locator(`#droppedlist span`)).toHaveCount(2);

  //Assert 2nd way
  await expect(page.locator(`#todrag span`)).toHaveCount(0);
  await expect(page.locator("#droppedlist", {hasText: `Draggable 1`})).toBeVisible();
  await expect(page.locator("#droppedlist", {hasText: `Draggable 2`})).toBeVisible();
});