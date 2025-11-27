import { test, expect } from '@playwright/test';

test.describe(`Mui Textfield`, () => {
    test('Verify the value', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('Name');
        await textField.fill('Tenkasi');

        await expect(textField).toHaveValue('Tenkasi');
    });


    test('maxLength characters', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('Name');

        await textField.fill('Karur');
        const value = await textField.inputValue();

        expect(value.length).toBeLessThanOrEqual(5);
    });


    test('maxLength characters - Error', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('Name');

        await textField.fill('Tenkasi');
        await textField.blur();

        expect(page.getByText("Length is 5")).toBeVisible()
    });


    test("Empty value", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByPlaceholder("Enter Name");

        await textField.fill("Madurai");
        textField.clear();

        expect(textField).toHaveValue('');
    });


    test("Alphabets only - Error", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByPlaceholder("Enter Name");

        await textField.fill("55555");
        await textField.blur();

        expect(page.getByText("Alphabets Only")).toBeVisible()
    });


    test("Alphabets only", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByPlaceholder("Enter Name");

        await textField.fill("Karur");
        await textField.blur();

        expect(page.getByText("Alphabets Only")).not.toBeVisible()
    });


    test("Required - Error", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByPlaceholder("Enter Name");

        await textField.fill("");
        await textField.blur();

        expect(page.getByText("This field is Mandatory")).toBeVisible()
    });


    test("Required", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByLabel("Name");

        await textField.fill("Karur");
        await textField.blur();

        expect(page.getByText("This field is Mandatory")).not.toBeVisible()
    });


    test("Email only - Error", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByLabel("Email");

        await textField.fill("sample");
        await textField.blur();

        expect(page.getByText("Enter Valid Email")).toBeVisible()
    });


    test("Email only", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByLabel("Email");

        await textField.fill("sample@gmail.com");
        await textField.blur();

        expect(page.getByText("Enter Valid Email")).not.toBeVisible()
    });


    test('Verify the number value', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('Population');
        await textField.fill('5');

        await expect(textField).toHaveValue('5');
    });


    test("Range - Error", async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('Population');

        await textField.fill('9');
        await textField.blur();

        expect(page.getByText("Range 10-1440796")).toBeVisible();
    });


    test("Range", async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('Population');

        await textField.fill('11');
        await textField.blur();

        expect(page.getByText("Range 10-1440796")).not.toBeVisible();
    });


    test("Readonly", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const input = page.getByLabel("ReadOnly");

        await expect(input).toHaveAttribute("readOnly", "");
    });


    test("Disabled", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const input = page.getByLabel("Disabled");

        await expect(input).toBeDisabled();
    });


    test("Ref - Focus, setValue", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const button = page.getByRole('button', { name: "Click Me" });

        await button.click();

        const input = page.getByLabel("Population");

        await expect(input).toBeFocused();
        await expect(input).toHaveValue("88");
    });


    test("Ref - setDisabled, setError", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const button = page.getByRole('button', { name: "Save" });

        await button.click();

        const input = page.getByLabel("Name");

        await expect(input).toBeDisabled();
        await expect(page.getByText("String Only")).toBeVisible();
    });

});