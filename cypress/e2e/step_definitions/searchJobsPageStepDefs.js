
import {When, Then} from "@badeball/cypress-cucumber-preprocessor";
import SearchJobsPage from "../page_objects/SearchJobsPage";

const searchJobsPage = new SearchJobsPage();

When(/^the user searches for "([^"]*)" and clicks the "([^"]*)" button$/, function (searchText, buttonText) {
    searchJobsPage.searchMenu(searchText);
    searchJobsPage.clickSearchButtonByText(buttonText);
});

Then(/^the user should see at least one search result$/, function () {
    searchJobsPage.verifyResultsCountAtLeastOne();
});
