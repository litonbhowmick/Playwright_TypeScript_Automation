import { Page } from '@playwright/test';

export class LoginPage {

    page: Page;

    username_input: string = 'input#user-name';
    password_input: string = 'input#password';
    login_btn: string = 'input#login-button';

    constructor(page: Page) {
        this.page = page;
    }

    async LoginUsingCred(username, password) {
        await this.page.locator(this.username_input).fill(username);
        await this.page.locator(this.password_input).fill(password);
        await this.page.locator(this.login_btn).click();
    }

}