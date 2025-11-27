import { test, expect } from '@playwright/test';

test.describe(`Mui Serverlookup`, () => {
    test('Select the value', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const field = page.getByRole('combobox', { name: 'Location' })
        await field.click();
        const option = page.getByRole('option', { name: 'Madurai' });
        await option.click();

        await expect(field).toHaveValue('Madurai');
    });


    test('Default value', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const field = page.getByRole('combobox', { name: 'Default' })
        await field.click();

        await expect(field).toHaveValue('Madurai');
    });


    test('Lookup - filter', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const field = page.getByRole('combobox', { name: 'Location' });

        await field.fill('Che');

        const option = page.getByRole('option', { name: 'Chennai' });
        await expect(option).toBeVisible();
    });


    test('Clear value', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const field = page.getByRole('combobox', { name: 'Location' });

        await field.click();
        await page.getByRole('option', { name: 'Madurai' }).click();

        await page.getByLabel('Clear').click();

        await expect(field).toHaveValue('');
    });


    test("Required - Error", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const field = page.getByRole('combobox', { name: 'Location' });

        await field.click();
        await page.getByLabel('Clear').click();
        await field.blur();

        expect(page.getByText("This field is Mandatory")).toBeVisible()
    });


    test("Required", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const field = page.getByRole('combobox', { name: 'Location' });

        await field.click();
        await page.getByRole('option', { name: 'Tenkasi' }).click();
        await field.blur();

        expect(page.getByText("This field is Mandatory")).not.toBeVisible()
    });


    test("Readonly", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const input = page.getByLabel("LookupReadOnly");

        await expect(input).toHaveAttribute("readOnly", "");
    });


    test("Disabled", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const input = page.getByLabel("lookupDisabled");

        await expect(input).toBeDisabled();
    });


    test("Ref - Focus, setValue", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const button = page.getByRole('button', { name: "Click Serverlookup" });

        await button.click();

        const field = page.getByRole('combobox', { name: 'Location' });
        await field.click();
        // const option = page.getByRole('option', { name: 'Chennai' });
        // await option.click();

        await expect(field).toBeFocused();
        await expect(field).toHaveValue("Chennai");
    });


    test("Ref - setDisabled, setError", async ({ page }) => {
        await page.goto("http://localhost:3000/palmyra-ui/test");

        const button = page.getByRole('button', { name: "Save Lookup" });

        await button.click();

        const field = page.getByRole('combobox', { name: 'Location' });

        await expect(field).toBeDisabled();
        await expect(page.getByText("String Only")).toBeVisible();
    });


});