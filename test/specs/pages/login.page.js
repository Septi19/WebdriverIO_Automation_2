class LoginPage {
    get usernameLabel() {
        return $('app-login > div > div > form > div:nth-child(1) > div > div > label');
    }

    get usernameField() {
        return $('#username');
    }

    get passwordLabel() {
        return $('app-login > div > div > form > div:nth-child(2) > div > div > label');
    }

    get passwordField() {
        return $('#password');
    }

    get loginButton() {
        return $('app-login > div > div > form > div:nth-child(3) > div > button');
    }

    get emailErrorText() {
        return $('app-login > div > div > form > div:nth-child(1) > div > div > p');
    }

    get passwordErrorText() {
        return $('app-login > div > div > form > div:nth-child(2) > div > div > p');
    }

    get invalidLoginErrorText() {
        return $('app-login > div > div > form > div:nth-child(3) > div > p');
    }
}

module.exports = new LoginPage();