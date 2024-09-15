import { Page } from "@playwright/test";
import { RegisterPage } from "./register_page_object";
import { ThankYouPage } from "./thank_you_page";

export class PageFactory {
  
  static async createThankYouPage(page: Page) : Promise<ThankYouPage> {
    const thankYouPage = new ThankYouPage(page);
    await thankYouPage.initialize()
    return thankYouPage
  }

  static async createRegistrationPage(page : Page) : Promise<RegisterPage> {
    const registerPage = new RegisterPage(page);
    await registerPage.initialize()
    return registerPage
  }
}


