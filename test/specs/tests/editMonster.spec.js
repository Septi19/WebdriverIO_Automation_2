const LoginPage = require('../pages/login.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

const username = 'bob@bob.com';
const password = 'Test123';
describe('Edit Monster Test Suite', () => {

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

    it('should edit a monster', async () => {
        let name = 'The Burning Man';
        let description = 'The guy is on fire';

        await MonsterListPage.monsterItemContainer(1).click();

        await MonsterCardPage.manageMonsterMenu.click();
        await MonsterCardPage.editMonster.click();

        assert.equal(await browser.getUrl(), `${configBaseUrl}mine/0/edit`);

        await NewEditMonsterPage.nameField.setValue(name);
        await NewEditMonsterPage.favoriteCheckbox.click();
        await NewEditMonsterPage.mageRadio.click();
        await NewEditMonsterPage.descriptionField.setValue(description);
        await NewEditMonsterPage.saveButton.click();

        assert.equal(await MonsterListPage.monsterName(1).getText(), name, 'Name is not correct');
        assert.equal(await MonsterListPage.monsterDescription(1).getText(), description, 'Description is not correct');
        assert.equal(await MonsterListPage.monsterFavorite(1).isDisplayed(), false, 'Favorite icon is not displayed');
        assert.equal(await MonsterListPage.monsterIcon(1).getAttribute('class'), 'glyphicon ra ra-laser-blast pull-right role', 'Icon is not correct');
    })
})