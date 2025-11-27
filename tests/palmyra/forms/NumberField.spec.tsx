import { test, expect } from '@playwright/test';

test.describe(`Mui Number field`, () => {
    test('Verify the value', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('NumberField');
        await textField.fill('43');

        await expect(textField).toHaveValue('43');
    });


    test('maxLength characters', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('NumberField');

        await textField.fill('23442');
        const value = await textField.inputValue();

        expect(value.length).toBeLessThanOrEqual(5);
    });


    test('maxLength characters - Error', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByLabel('NumberField');

        await textField.fill('2');
        await textField.blur();

        expect(page.getByText("Length is 5")).toBeVisible()
    });


    test("Empty value", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByPlaceholder("Enter Value");

        await textField.fill("22");
        textField.clear();

        expect(textField).toHaveValue('');
    });


    // test("Numbers only - Error", async ({ page }) => {
    //     await page.goto("http://localhost:3000/palmyra-ui/test");

    //     const textField = page.getByPlaceholder("Enter Value");

    //     await textField.fill("Tenkasi");
    //     await textField.blur();

    //     expect(page.getByText("Number Only")).toBeVisible()
    // });


    test("Numbers only", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByPlaceholder("Enter Value");

        await textField.fill("22");
        await textField.blur();

        expect(page.getByText("Number Only")).not.toBeVisible()
    });


    test("Required - Error", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByLabel("NumberField");

        await textField.fill("");
        await textField.blur();

        expect(page.getByText("This field is Mandatory")).toBeVisible()
    });


    test("Required", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByLabel("NumberField");

        await textField.fill("11");
        await textField.blur();

        expect(page.getByText("This field is Mandatory")).not.toBeVisible()
    });


    // test("Float only - Error", async ({ page }) => {
    //     await page.goto("http://localhost:3000/palmyra-ui/test");

    //     const textField = page.getByLabel("Float");

    //     await textField.fill("asd");
    //     await textField.blur();

    //     expect(page.getByText("Enter Float")).toBeVisible()
    // });


    test("Float only", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const textField = page.getByLabel("Float");

        await textField.fill("1.2");
        await textField.blur();

        expect(page.getByText("Enter Float")).not.toBeVisible()
    });

    test("Range - Error", async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByPlaceholder('Enter Value');

        await textField.fill('9');
        await textField.blur();

        expect(page.getByText("Range 10-1440796")).toBeVisible();
    });


    test("Range", async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const textField = page.getByPlaceholder('Enter Value');

        await textField.fill('11');
        await textField.blur();

        expect(page.getByText("Range 10-1440796")).not.toBeVisible();
    });


    test("Readonly", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const input = page.getByLabel("NumberReadOnly");

        await expect(input).toHaveAttribute("readOnly", "");
    });


    test("Disabled", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const input = page.getByLabel("NumberDisabled");

        await expect(input).toBeDisabled();
    });


    test("Ref - Focus, setValue", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const button = page.getByRole('button', { name: "Click Number" });

        await button.click();

        const input = page.getByPlaceholder('Enter Value');

        await expect(input).toBeFocused();
        await expect(input).toHaveValue("88");
    });


    test("Ref - setDisabled, setError", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const button = page.getByRole('button', { name: "Save Number" });

        await button.click();

        const input = page.getByLabel("NumberField");

        await expect(input).toBeDisabled();
        // await expect(page.getByText("Number Only")).toBeVisible();
    });

});