import { Page } from "@playwright/test";

export class Dropdown {

    page: Page;

    constructor(page: Page){
        this.page = page;
    };

    async selectElementFromDropdown(element: string, locator: string) {

        let element_type: string = element.split(':')[0];
        let element_value: string = element.split(':')[1];

        console.log(element_type);
        console.log(element_value);

        if (element_type.includes('label'))
            await this.page.locator(locator).selectOption({
                label: element_value
            });
        else if (element_type.includes('value')) {
            await this.page.locator(locator).selectOption({
                value: element_value
            })
        }
        else {
            await this.page.locator(locator).selectOption({
                index: Number.parseInt(element_value)
            })
        }
    };

    async selectElementFromDropdownHavingText(element: string, locator: string){
        this.page.locator(locator, {
            hasText:element
        });
    };

    async selectElementFromMultiselectDropdown(elements: Array<string>, locator: string){
        await this.page.locator(locator).selectOption(elements);
    }

}