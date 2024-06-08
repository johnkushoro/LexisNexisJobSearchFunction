import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import TopBanner from "../page_objects/TopBanner";

const topBanner = new TopBanner();


When(/^the user clicks on "([^"]*)" in the top banner dropdown$/, function (buttonText) {
   topBanner.clickTopBannerDropdownByText(buttonText);
});