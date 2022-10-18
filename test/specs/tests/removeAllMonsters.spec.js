const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

const username = 'bob@bob.com';
const password = 'Test123';

// This test will fall when Allure reports is enabled in the config file
describe('Remove All Monsters Test Suite', () => {

    beforeEach(() => {
        // Add code here
    })

    beforeEach(async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();
    })

    afterEach(() => {
        // Add code here
    })

    afterEach(async () => {
        await browser.pause(3000);
    })

    it('should  remove all monsters', async () => {
        await ButtonsAreaPage.removeMonstersButton.click();

        await browser.getAlertText();

        await browser.acceptAlert();

        assert.equal(await MonsterListPage.monsterCountText.getText(), 'Number of monsters: 0', 'Count text is not correct');
    })

    it('should not remove all monsters', async () => {
        await ButtonsAreaPage.removeMonstersButton.click();

        await browser.dismissAlert();

        assert.equal(await MonsterListPage.monsterCountText.getText(), 'Number of monsters: 2', 'Count text is not correct');
    })
})