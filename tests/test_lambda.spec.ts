// Playground from book

import { test, expect } from "@playwright/test";

test('Search the text "Palm Treo Pro"', async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await page.locator("span.title", { hasText: "Mega Menu" }).hover();

  await page.locator("a[title=Desktop]").click();

  await page
    .locator("div.carousel-item.active > img[title='Palm Treo Pro']")
    .hover();

  await page.locator("button.cart-29").click();

  await page
    .locator("a.btn.btn-primary.btn-block", { hasText: "View Cart" })
    .click();

  await expect(
    page.locator("td.text-left", { hasText: "Palm Treo Pro" })
  ).toBeVisible();

  await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue(
    "1"
  );
});

test("LambdaTest Playground Example  ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  await page.getByTestId("sum1").fill("1");

  await page.getByTestId("sum2").fill("4");

  await expect(page.getByRole("button", { name: "Get Sum" })).toBeVisible();

  await page.getByRole("button", { name: "Get Sum" }).click();

  await expect(page.locator("#addmessage")).toHaveText("5");
});

test("LambdaTest Playground One Checkbox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  //Assert checkbox is Un-Checked
  await expect(page.getByLabel("Click on check box")).not.toBeChecked();

  //Assert checkbox is Checked
  await page.getByLabel("Click on check box").check();
  await expect(page.getByLabel("Click on check box")).toBeChecked();

  //Assert checkbox is Un-Checked again
  await page.getByLabel("Click on check box").uncheck();
  await expect(page.getByLabel("Click on check box")).not.toBeChecked();

});

test.only("LambdaTest Disable Checkboxes Demo", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  // Arrange
  const multipleSection = page
  .locator("h2:text('Multiple Checkbox Demo')")
  .locator("xpath=following-sibling::*[1]")

  const disabledSection = page
  .locator("h2:text('Disabled Checkbox Demo')")
  .locator("xpath=following-sibling::*[1]")

  const checkboxes = disabledSection.locator("input[type='checkbox']");
  const multiplecheckboxes = multipleSection.locator("input.mr-8");

  // Assert check first checkbox
  await expect(checkboxes.nth(0)).not.toBeChecked();
  await checkboxes.nth(0).check();
  await expect(checkboxes.nth(0)).toBeChecked();

  // Assert check second checkbox
  await expect(checkboxes.nth(1)).not.toBeChecked();
  await checkboxes.nth(1).check();
  await expect(checkboxes.nth(1)).toBeChecked();

  //Assert check third checkobx disabled
  await expect(checkboxes.nth(2)).toBeDisabled();

  // Assert check fourth checkbox disabled
  await expect(checkboxes.nth(3)).toBeDisabled();

  // Assert check multiple first checkbox
  await expect(multiplecheckboxes.nth(0)).not.toBeChecked();
  await multiplecheckboxes.nth(0).check();
  await expect(multiplecheckboxes.nth(0)).toBeChecked();

  // Assert check multiple second checkbox
  await expect(multiplecheckboxes.nth(1)).not.toBeChecked();
  await multiplecheckboxes.nth(1).check();
  await expect(multiplecheckboxes.nth(1)).toBeChecked();

  // Assert check multiple third checkbox
  await expect(multiplecheckboxes.nth(2)).not.toBeChecked();
  await multiplecheckboxes.nth(2).check();
  await expect(multiplecheckboxes.nth(2)).toBeChecked();

  // Assert check multiple fourth checkbox
  await expect(multiplecheckboxes.nth(3)).not.toBeChecked();
  await multiplecheckboxes.nth(3).check();
  await expect(multiplecheckboxes.nth(3)).toBeChecked();

});
