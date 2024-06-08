import {When} from "@badeball/cypress-cucumber-preprocessor";
import CareersPage from "../page_objects/CareersPage";

const careersPage = new CareersPage();

When(/^the user clicks on "([^"]*)"$/, function (buttonText) {
    careersPage.clickCookieBannerButtonByText(buttonText)
});