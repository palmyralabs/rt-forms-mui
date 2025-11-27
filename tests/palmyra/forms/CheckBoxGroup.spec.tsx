import { test, expect } from '@playwright/test';

test.describe(`Mui CheckBoxGroup`, () => {
    // test('Verify the value', async ({ page }) => {
    //     await page.goto('http://localhost:3000/palmyra-ui/test');

    //     const field = page.getByLabel('CheckBoxGroupField').nth(0);
    //     await field.check({ force: true });

    //     await expect(field).toBeChecked();
    // });

    test('Checkbox labels', async ({ page }) => {
        await page.goto('http://localhost:3000/palmyra-ui/test');

        const trueOption = page.getByRole('checkbox', { name: "true" });
        const falseOption = page.getByRole('checkbox', { name: "false" });

        await expect(trueOption).toBeVisible();
        await expect(falseOption).toBeVisible();
    });

});