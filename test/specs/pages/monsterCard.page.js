class MonsterCardPage {
    get selectMonsterText() {
        return $('app-monsters > div > div.col-md-7.rightPanel > app-monster-start > h3');
    }

    get monsterCard() {
        return $('.monsterDetail');
    }

    get monsterName() {
        return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-8 > h1');
    }

    get monsterDescription() {
        return $('app-monster-detail > div.monsterDetail > div:nth-child(2) > div');
    }

    get monsterIcon() {
        return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.role');
    }

    get monsterFavorite() {
        return $('app-monster-detail > div.monsterDetail > div:nth-child(1) > div.col-xs-4 > span.hearted');
    }

    get manageMonsterMenu() {
        return $('button=Manage Monster');
    }

    get editMonster() {
        return $('app-monster-detail > div.row > div > div > ul > li:nth-child(1) > a');
    }

    get deleteMonster() {
        return $('app-monster-detail > div.row > div > div > ul > li:nth-child(2) > a');
    }

    get deleteMonsterModal() {
        return $('mat-dialog-container');
    }

    get deleteMonsterModalText() {
        return $('mat-dialog-container > app-pop-up > p');
    }

    get deleteMonsterModalYes() {
        return $('mat-dialog-container > app-pop-up > div > div:nth-child(1) > button')
    }

    get deleteMonsterModalNo() {
        return $('mat-dialog-container > app-pop-up > div > div:nth-child(2) > button')
    }
}

module.exports = new MonsterCardPage();