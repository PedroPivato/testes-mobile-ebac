const { expect, driver } = require("@wdio/globals");
const homePage = require("../pageobjects/home.page.js");
const loginPage = require("../pageobjects/login.page.js");
const profilePage = require("../pageobjects/profile.page.js");

describe('My login application', () => {
    it('Should login with valid credentials', async () => {
            await homePage.openMenu('profile')
            await loginPage.login('pedroqa@ebac.com.br', 'pedro123')
            await homePage.openMenu('profile')
            expect (await profilePage.profileName('Pedro Pivato')).toExist()
    });
});