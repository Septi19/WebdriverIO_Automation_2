const LoginPage = require('../pages/login.page');

describe('Test Suite', () => {

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

    it('should display error message when fields are blank', async () => {
        await browser.url('');

        await LoginPage.usernameField.click();
        await LoginPage.passwordField.click();
        assert.equal(await LoginPage.emailErrorText.isDisplayed(), true, 'Email error text is not displayed');
        assert.equal(await LoginPage.emailErrorText.getText(), 'Username is required', 'Email required error text is not correct');

        await LoginPage.passwordField.click();
        await LoginPage.usernameField.click()
        assert.equal(await LoginPage.passwordField.isDisplayed(), true, 'Password error text is not displayed');
        assert.equal(await LoginPage.passwordErrorText.getText(), 'Password is required', 'Password error text is not correct');
    })

    it('should display error when not a valid email', async () => {
        await browser.url('');

        await LoginPage.usernameField.setValue('Bob');
        await LoginPage.passwordField.click();
        assert.equal(await LoginPage.emailErrorText.isDisplayed(), true, 'Email error text is not displayed');
        assert.equal(await LoginPage.emailErrorText.getText(), 'Username needs to be a valid email', 'Email format error text is not correct');
    })

    it('should display error when not valid email', async () => {
        let emails = ['bob', 'bob@', 'bob@bob.'];

        for (let i = 0; i < emails.length; i++) {
            await browser.url('');
            await LoginPage.usernameField.setValue(emails[i]);
            await LoginPage.passwordField.click();
            assert.equal(await LoginPage.emailErrorText.isDisplayed(), true, 'Email error text is not displayed');
            assert.equal(await LoginPage.emailErrorText.getText(), 'Username needs to be a valid email', 'Email format error text is not correct');
        }
    })

    it('should display error when username or password is invalid', async () => {
        let logins = [
            {
                email: 'bob@bob.com',
                password: 'fakepass'
            },
            {
                email: 'sam@sam.com',
                password: 'Test123'
            },
        ]

        for (let i = 0; i < logins.length; i++) {
            await browser.url('');
            await LoginPage.usernameField.setValue(logins[i].email);
            await LoginPage.passwordField.setValue(logins[i].password);
            await LoginPage.loginButton.click();

            assert.equal(await LoginPage.invalidLoginErrorText.isDisplayed(), true, 'Invalid login text is not displayed');
            assert.equal(await LoginPage.invalidLoginErrorText.getText(), 'Invalid username or password', 'Invalid login text is not correct');
        }
    })
    it('should login', async () => {
        let username = 'bob@bob.com';
        let password = 'Test123';

        await browser.url('');

        await LoginPage.usernameField.setValue(username);
        await LoginPage.passwordField.setValue(password);
        await LoginPage.loginButton.click();

        assert.equal(await browser.getUrl(), `${configBaseUrl}mine`)
    })

    it('should not route to mine when logged in', async () => {
        await browser.url('/mine');

        assert.equal(await browser.getUrl(), `${configBaseUrl}`, 'App routed to mine')
    })
})