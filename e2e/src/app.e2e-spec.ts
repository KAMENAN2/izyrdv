import { AppPage } from './app.po';
<<<<<<< HEAD

describe('new App', () => {
=======
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
>>>>>>> 75e067ca023a3c73cabf48759631afaddbbbb9de
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

<<<<<<< HEAD
  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('The world is your oyster.');
=======
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('izy-RDV-Front-V1 app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
>>>>>>> 75e067ca023a3c73cabf48759631afaddbbbb9de
  });
});
