import {Given} from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';
import HomePage from "../page_objects/HomePage";

const homePage = new HomePage();

Given(/^I am on the homepage of "([^"]*)"$/, function (urlParameter) {
    const baseUrl = Cypress.env(urlParameter);
    if (!baseUrl) {
        throw new Error(`The ${urlParameter} environment variable is not set.`);
    }
    cy.visit(baseUrl);

    homePage.clickCookieBannerButtonByText('Accept All Cookies');
});
