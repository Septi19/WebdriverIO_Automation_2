const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');

const username = 'bob@bob.com';
const password = 'Test123';

describe('Nav Bar Test Suite', () => {

    beforeEach(() => {
        // Add code here
    })

    beforeEach(() => {
        // Add code here
    })

    afterEach(() => {
        // Add code here
    })

    afterEach(async () => {
        await browser.pause(3000);
    })

    it('should open support page', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        await NavPage.burgerMenu.click();
        await NavPage.supportLink.click();

        await browser.switchWindow('https://glitchitsystem.com/');

        assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/', 'New window url is not correct');
    })

    it('should log out', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        await NavPage.burgerMenu.click();
        await NavPage.logoutLink.click();

        assert.equal(await NavPage.burgerMenu.isDisplayed(), false, 'The burger is still displayed');
        assert.equal(await browser.getUrl(), configBaseUrl, 'Url is not correct');
    })
})