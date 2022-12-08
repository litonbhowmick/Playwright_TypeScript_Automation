import { Page, expect } from "@playwright/test";

export class HomePage {

    page: Page;

    //locators
    menu_btn: string = 'button#react-burger-menu-btn';
    logout_link: string = 'a#logout_sidebar_link';

    //constractor
    constructor(page: Page) {
        this.page = page;
    }

    //functions
    async log_off() {
        await this.page.locator(this.menu_btn).click();
        await this.page.locator(this.logout_link).hover();
        await this.page.locator(this.logout_link).click();
    }

    async homepage_title(){
         return await this.page.title();
    }

    async verify_homepageTitle(title) {
        await expect(this.page).toHaveTitle(title);
    }

}