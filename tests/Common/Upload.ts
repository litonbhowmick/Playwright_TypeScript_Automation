import { Page } from '@playwright/test'


export class Upload {

    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    async uploadFile(clicklocator: string, file: string) {
        await this.page.setInputFiles(clicklocator, [file]);
    }
}