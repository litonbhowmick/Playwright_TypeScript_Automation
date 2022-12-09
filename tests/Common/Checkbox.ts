import { Locator, Page } from "@playwright/test";


export class Checkbox {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectSingleCheckbox(locator: string) {

        if (!this.page.locator(locator).isChecked()) {
            this.page.locator(locator).click();
        }
    }

    async selectMultipleCheckbox(locator: string) {
        var all_checkboxes: Locator = this.page.locator(locator);
        let limit: Number = await all_checkboxes.count();
        for (var i = 0; i <= limit; i++) {
            await all_checkboxes.nth(i).click();
        }
    }







}