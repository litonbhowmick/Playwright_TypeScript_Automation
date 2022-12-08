import {test, expect} from '../Fixtures/playwright.custom.config'
import * as data from '../TestData/LoginPage.json'

test('Login into an application', async ({loginpage, homepage}) => {

  await loginpage.LoginUsingCred(data.cred[0].username, data.cred[0].password);

  await homepage.verify_homepageTitle(/Swag/);

  await homepage.log_off();

  console.log("Logging off from the application!!")

});