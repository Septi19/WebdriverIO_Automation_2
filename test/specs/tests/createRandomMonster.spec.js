const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');

const username = 'bob@bob.com';
const password = 'Test123';
describe('Create Random Monster Test Suite', () => {

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

    it('should create random monster', async () => {
        await ButtonsAreaPage.randomMonsterButton.click();

        assert.equal(await MonsterListPage.monsterItemContainerList.length, 3, 'The number of monsters is not correct');
    })
})