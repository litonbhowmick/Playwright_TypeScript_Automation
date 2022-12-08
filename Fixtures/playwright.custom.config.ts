import customtest from "@playwright/test";
import { Page } from "@playwright/test";
import { LoginPage } from "../tests/PageLayers/Login";
import { HomePage } from "../tests/PageLayers/Homepage";

const url: string = "https://www.saucedemo.com/";
var testpages;

type pages = {
    page: Page,
    loginpage: LoginPage,
    homepage: HomePage
};

testpages = customtest.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.waitForLoadState('networkidle');
});

testpages = customtest.afterEach(async ({ page }) => {
    await page.waitForURL(url);
});

testpages = customtest.extend<pages>({
    loginpage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homepage: async ({ page }, use) => {
        await use(new HomePage(page));
    }
});

export const test = testpages;
export { expect } from '@playwright/test';