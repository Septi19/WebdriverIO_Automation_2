const LoginPage = require('../pages/login.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const MonsterListPage = require('../pages/monsterList.page');

const username = 'bob@bob.com';
const password = 'Test123';

describe('Delete Monster Test Suite', () => {

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

    it('should delete monster', async () => {
        await MonsterListPage.monsterItemContainer(1).click();

        await MonsterCardPage.manageMonsterMenu.click();
        await MonsterCardPage.deleteMonster.click();

        await browser.pause(3000);
        assert.equal(await MonsterCardPage.deleteMonsterModal.isDisplayed(), true, 'Modal is not displayed');
        await MonsterCardPage.deleteMonsterModalYes.click();

        assert.equal(await MonsterListPage.monsterItemContainer(1).isDisplayed(), true, 'Item 1 does not exist');
        // assert.equal(await MonsterListPage.monsterName(1).getText() !== 'Vampire', true, 'It is still the vampire');
    })
})