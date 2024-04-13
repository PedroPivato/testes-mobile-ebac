const { expect, driver } = require("@wdio/globals");
const homePage = require("../pageobjects/home.page.js");
const loginPage = require("../pageobjects/login.page.js");
const profilePage = require("../pageobjects/profile.page.js");
const { SignupPage, RegistrationPage } = require("../pageobjects/cadastro.page.js");

describe('Registration and login', () => {
    it('Should sign up a new user and login', async () => {
        await homePage.openMenu('profile');

        await SignupPage.openSignUpPage('Sign up')
        await RegistrationPage.create('pedro','ebac','123456789','testepedro7@teste.com','12345', '12345')
        
    });
});