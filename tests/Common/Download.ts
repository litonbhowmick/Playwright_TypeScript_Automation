import { Page } from "@playwright/test";


export class Download {

    page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async fileDownload(clickelelocator: string) {

        const [downloads] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.locator(clickelelocator).click(),
        ]);

        await downloads.path();

        return downloads.saveAs(downloads.path() + downloads.suggestedFilename());

    }
}