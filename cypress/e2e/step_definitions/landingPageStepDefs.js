
import {When} from "@badeball/cypress-cucumber-preprocessor";
import '../../support/commands';
import LandingPage from "../page_objects/LandingPage";

const landingPage = new LandingPage();

When(/^the user clicks on "([^"]*)" on the landing page$/, function (linkText) {
    landingPage.clickLearnMoreNearHeading(linkText);
});