const LoginPage = require('../pages/login.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');


const username = 'bob@bob.com';
const password = 'Test123';
var countText = 'Number of monsters: ';

describe('Create Monster Test Suite', () => {

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

    it('should createa new monster', async () => {
        let row = 3;
        let name = 'Thing';
        let description = 'Thing is a monster thief.'

        await ButtonsAreaPage.newMonsterButton.click();

        await NewEditMonsterPage.nameField.setValue(name);
        await NewEditMonsterPage.favoriteCheckbox.click();
        await NewEditMonsterPage.thiefRadio.click();
        await NewEditMonsterPage.descriptionField.setValue(description);
        await NewEditMonsterPage.saveButton.click();

        assert.equal(await MonsterListPage.monsterCountText.getText(), `${countText}3`, 'Monster count is not correct');
        assert.equal(await MonsterListPage.monsterItemContainer(row).isDisplayed(), true, 'Monster Item is missing');
        assert.equal(await MonsterListPage.monsterName(row).getText(), 'Thing', 'Name is not correct');
        assert.equal(await MonsterListPage.monsterDescription(row).getText(), description, 'Description is not correct');
        assert.equal(await MonsterListPage.monsterFavorite(row).isDisplayed(), true, 'Favorite Monster is not correct');
        assert.equal(await MonsterListPage.monsterIcon(row).getAttribute('class'), 'glyphicon ra ra-kunai pull-right role', 'Monster Icon is not correct',)
    })

    it('should display error message', async () => {
        await ButtonsAreaPage.newMonsterButton.click();

        await NewEditMonsterPage.nameField.click();
        await NewEditMonsterPage.descriptionField.click();
        await NewEditMonsterPage.nameField.click();

        assert.equal(await NewEditMonsterPage.requiredErrorText.isDisplayed(), true, 'Name error text is not correct');
        assert.equal(await NewEditMonsterPage.descriptionRequiredFieldErrorText.isDisplayed(), true, 'Description error text is not correct');
    })
})