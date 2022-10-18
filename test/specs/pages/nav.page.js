class NavPage {
    get brand() {
        return $('.navbar-brand');
    }

    get monsterNavItem() {
        return $('nav > div > div.collapse.navbar-collapse > ul > li > a');
    }

    //Only available when logged in

    get burgerMenu() {
        return $('.dropdown-toggle');
    }

    get supportLink() {
        return $('div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(1) > a');
    }

    get logoutLink() {
        return $('div.collapse.navbar-collapse > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(2) > a');
    }
}

module.exports = new NavPage();