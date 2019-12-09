import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
<<<<<<< HEAD
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
=======
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
>>>>>>> 75e067ca023a3c73cabf48759631afaddbbbb9de
  }
}
