const LoginPage = require('../pages/login.page');
const NavPage = require('../pages/nav.page');
const ButtonsAreaPage = require('../pages/buttonsArea.page');
const MonsterListPage = require('../pages/monsterList.page');
const MonsterCardlPage = require('../pages/monsterCard.page');
const NewEditMonsterPage = require('../pages/newEditMonster.page');

const username = 'bob@bob.com';
const password = 'Test123';

describe('Test Suite', () => {

    // beforeEach(() => {
    //     // Add code here
    // })

    // beforeEach(() => {
    //     // Add code here
    // })

    // afterEach(() => {
    //     // Add code here
    // })

    afterEach(async () => {
        await browser.pause(3000)
    })

    it('should validate static content on login page', async () => {
        await browser.url('');

        assert.equal(await browser.getUrl(), configBaseUrl, 'The URL is not the same');

        // Test that static elements are displayed
        assert.equal(await NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
        assert.equal(await NavPage.monsterNavItem.isDisplayed(), true, 'MonsterNavItem is not displayed');

        assert.equal(await LoginPage.usernameLabel.isDisplayed(), true, 'Username Label is not displayed');
        assert.equal(await LoginPage.usernameField.isDisplayed(), true, 'Username Field is not displayed');
        assert.equal(await LoginPage.passwordLabel.isDisplayed(), true, 'Password Label is not displayed');
        assert.equal(await LoginPage.passwordField.isDisplayed(), true, 'Password Field is not displayed');

        assert.equal(await LoginPage.emailErrorText.isDisplayed(), false, 'Username error message is displayed');
        assert.equal(await LoginPage.passwordErrorText.isDisplayed(), false, 'Password error message is displayed');

        assert.equal(await LoginPage.loginButton.isDisplayed(), true, 'Login button is not displayed');

        // Test the static element text is correct
        assert.equal(await NavPage.brand.getText(), 'Monster Dream Team', 'Brand text is not correct');
        assert.equal(await NavPage.monsterNavItem.getText(), 'My Monster Team', 'Monster nav item text is not correct');

        assert.equal(await LoginPage.usernameLabel.getText(), 'Username', 'Username label text is not correct');
        assert.equal(await LoginPage.passwordLabel.getText(), 'Password', 'Password label text is not correct');

        assert.equal(await LoginPage.loginButton.getText(), 'Login', 'Login button text is not correct')

        // Tesa default element state
        assert.equal(await LoginPage.loginButton.isClickable(), false, 'Login buttin is clickable');
        assert.equal(await LoginPage.usernameField.getValue(), '', 'Username field is not blank');
        assert.equal(await LoginPage.passwordField.getValue(), '', 'Password field is not blank');

        assert.equal(await LoginPage.usernameField.getAttribute('placeholder'), 'example@example.com', 'Username placeholder is not the same');
    })

    it('should validate static content in nav bar when logged in', async () => {
        await browser.url('');

        assert.equal(await NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
        assert.equal(await NavPage.monsterNavItem.isDisplayed(), true, 'Monster is not displayed');

        //Login

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        assert.equal(await NavPage.brand.isDisplayed(), true, 'Brand is not displayed');
        assert.equal(await NavPage.monsterNavItem.isDisplayed(), true, 'Monster is not displayed');
        assert.equal(await NavPage.burgerMenu.isDisplayed(), true, 'Burger menu is not displayed');

        //Before opening menu
        assert.equal(await NavPage.supportLink.isDisplayed(), false, 'Support link is displayed');
        assert.equal(await NavPage.logoutLink.isDisplayed(), false, 'Log out link is displayed');

        //Open menu
        await NavPage.burgerMenu.click();

        assert.equal(await NavPage.supportLink.isClickable(), true, 'Support link is not clickable');
        assert.equal(await NavPage.logoutLink.isClickable(), true, 'Log out link is not clickable');
    })

    it('should validate static buttons area', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        assert.equal(await ButtonsAreaPage.newMonsterButton.isDisplayed(), true, 'New Monster Button is not displayed');
        assert.equal(await ButtonsAreaPage.randomMonsterButton.isDisplayed(), true, 'Random Monster Button is not displayed');
        assert.equal(await ButtonsAreaPage.removeMonstersButton.isDisplayed(), true, 'Remove Monsters Button is not displayed');
        assert.equal(await ButtonsAreaPage.unfavoriteMonstersButton.isDisplayed(), true, 'Unfavorite Monsters Button is not displayed');
        assert.equal(await ButtonsAreaPage.createRandomMonsterTeamButton.isDisplayed(), true, 'Create Random Monster Team is not displayed');
        assert.equal(await ButtonsAreaPage.sortMonstersButton.isDisplayed(), true, 'Sort Monsters Button is not displayed');

        assert.equal(await ButtonsAreaPage.newMonsterButton.getText(), 'New Monster', 'New Monster Button text is not correct');
        assert.equal(await ButtonsAreaPage.randomMonsterButton.getText(), 'Random Monster', 'Random Monster Button text is not correct');
        assert.equal(await ButtonsAreaPage.removeMonstersButton.getText(), 'Remove All Monsters', 'Remove Monsters Button text is not correct');
        assert.equal(await ButtonsAreaPage.unfavoriteMonstersButton.getText(), 'Unfavorite All', 'Unfavorite Monsters Button text is not correct');
        assert.equal(await ButtonsAreaPage.createRandomMonsterTeamButton.getText(), 'Create Random Monster Team', 'Create Random Monster Team text is not correct');
        assert.equal(await ButtonsAreaPage.sortMonstersButton.getText(), 'Sort Monsters', 'Sort Monsters Button text is not correct');
    })

    it('should display default monster list', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        assert.equal(await MonsterListPage.monsterCountText.getText(), 'Number of monsters: 2', 'Monster list text is not the same');

        // Monster row 1
        assert.equal(await MonsterListPage.monsterName(1).getText(), 'Vampire', 'Row 1 monster name is not correct');
        assert.equal(await MonsterListPage.monsterDescription(1).getText(), 'He just wants your blood.', 'Row 1 monster description is not correct');
        assert.equal(await MonsterListPage.monsterIcon(1).getAttribute('class'), 'glyphicon ra ra-sword pull-right role', 'Row 1 monster icon is not correct');
        assert.equal(await MonsterListPage.monsterFavorite(1).getAttribute('class'), 'glyphicon glyphicon-heart pull-right hearted', 'Row 1 monster favorite icon is not correct');

        // Monster row 2

        assert.equal(await MonsterListPage.monsterName(2).getText(), 'Swamp Creature', 'Row 2 monster name is not correct');
        assert.equal(await MonsterListPage.monsterDescription(2).getText(), 'He awaits you in the swamp.', 'Row 2 monster description is not correct');
        assert.equal(await MonsterListPage.monsterIcon(2).getAttribute('class'), 'glyphicon ra ra-health pull-right role', 'Row 2 monster icon is not correct');
        assert.equal(await MonsterListPage.monsterFavorite(2).isDisplayed(), false, 'Row 2 monster favorite icon is not correct');
    })

    it('should validate default content in monster card', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        assert.equal(await MonsterCardlPage.selectMonsterText.isDisplayed(), true, 'Select a monster text is not displayed');
        assert.equal(await MonsterCardlPage.selectMonsterText.getText(), 'Select a Monster to edit.', 'Select a monster text is not correct');

        await MonsterListPage.monsterItemContainer(1).click();

        assert.equal(await MonsterCardlPage.selectMonsterText.isDisplayed(), false, 'Select a monster text is displayed');
        assert.equal(await MonsterCardlPage.monsterCard.isDisplayed(), true, 'Monster card is not displayed');

        assert.equal(await MonsterCardlPage.monsterName.getText(), 'Vampire', 'Monster name is not correct');
        assert.equal(await MonsterCardlPage.monsterDescription.getText(), 'He just wants your blood.', 'Monster description is not correct');

        assert.equal(await MonsterCardlPage.monsterIcon.getAttribute('class'), 'glyphicon ra ra-sword pull-right role', 'Icon is not correct');
        assert.equal(await MonsterCardlPage.monsterFavorite.getAttribute('class'), 'glyphicon glyphicon-heart pull-right hearted', 'Monster favorite is not correct');

        assert.equal(await MonsterCardlPage.manageMonsterMenu.isDisplayed(), true, 'Manage monster is not displayed');

        await MonsterCardlPage.manageMonsterMenu.click();
        assert.equal(await MonsterCardlPage.editMonster.isDisplayed(), true, 'Edit monster option is not displayed');
        assert.equal(await MonsterCardlPage.editMonster.isDisplayed(), true, 'Delete monster option is not displayed');
    })

    it('should validate default content in monster card', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        await ButtonsAreaPage.newMonsterButton.click();
        assert.equal(await browser.getUrl(), `${configBaseUrl}mine/new`, 'Url is not correct');

        assert.equal(await NewEditMonsterPage.saveButton.isDisplayed(), true, 'Save Button is not displayed');
        assert.equal(await NewEditMonsterPage.cancelButton.isDisplayed(), true, 'Cancel Button is not displayed');

        assert.equal(await NewEditMonsterPage.nameLabelText.isDisplayed(), true, 'Name Label Text is not displayed');
        assert.equal(await NewEditMonsterPage.nameField.isDisplayed(), true, 'Name field is not displayed');

        assert.equal(await NewEditMonsterPage.favoriteCheckbox.isDisplayed(), true, 'Favorite Checkbox is not displayed');
        assert.equal(await NewEditMonsterPage.favoriteLabelText.isDisplayed(), true, 'Favorite Label Text is not displayed');

        assert.equal(await NewEditMonsterPage.monsterRoleLabelText.isDisplayed(), true, 'Monster Role Label Text is not displayed');

        assert.equal(await NewEditMonsterPage.soldierRadio.isDisplayed(), true, 'Soldier Radio is not displayed');
        assert.equal(await NewEditMonsterPage.soldierIcon.isDisplayed(), true, 'Soldier Icon is not displayed');

        assert.equal(await NewEditMonsterPage.medicRadio.isDisplayed(), true, 'Medic Radio is not displayed');
        assert.equal(await NewEditMonsterPage.medicIcon.isDisplayed(), true, 'Medic Icon is not displayed');

        assert.equal(await NewEditMonsterPage.shieldRadio.isDisplayed(), true, 'Shield Icon is not displayed');
        assert.equal(await NewEditMonsterPage.shieldIcon.isDisplayed(), true, 'Shield Radio is not displayed');

        assert.equal(await NewEditMonsterPage.thiefRadio.isDisplayed(), true, 'Thief Radio is not displayed');
        assert.equal(await NewEditMonsterPage.thiefIcon.isClickable(), true, 'Thief Icon is not displayed');

        assert.equal(await NewEditMonsterPage.mageRadio.isDisplayed(), true, 'Mage Radio is not displayed');
        assert.equal(await NewEditMonsterPage.mageIcon.isDisplayed(), true, 'Mage Icon is not displayed');

        assert.equal(await NewEditMonsterPage.descriptionLabelText.isDisplayed(), true, 'Description Label Text is not displayed');
        assert.equal(await NewEditMonsterPage.descriptionField.isDisplayed(), true, 'Description field is not displayed');

        assert.equal(await NewEditMonsterPage.requiredErrorText.isDisplayed(), false, 'Required Error Text is not displayed');
        assert.equal(await NewEditMonsterPage.descriptionRequiredFieldErrorText.isDisplayed(), false, 'Description Required Field Error Text is not displayed');

        assert.include(await NewEditMonsterPage.roleLabelGroup.getText(), 'Soldier', 'Soldier label is not correct');
        assert.include(await NewEditMonsterPage.roleLabelGroup.getText(), 'Medic', 'Medic label is not correct');
        assert.include(await NewEditMonsterPage.roleLabelGroup.getText(), 'Shield', 'Shield label is not correct');
        assert.include(await NewEditMonsterPage.roleLabelGroup.getText(), 'Thief', 'Thief label is not correct');
        assert.include(await NewEditMonsterPage.roleLabelGroup.getText(), 'Mage', 'Mage label is not correct');
    })
})