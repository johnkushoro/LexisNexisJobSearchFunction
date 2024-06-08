import 'cypress-wait-until';

import Utilities from "../../support/Utilities";

const utilities = new Utilities();

export default class SearchJobsPage {

    static ALL_JOBS_SEARCH_FIELD = 'input.search-box-input';
    static SEARCH_BUTTON_ELEMENT = '#search-box-button';
    static SEARCH_RESULTS_COUNT_ELEMENT = 'div[class="search-results"] div[class="ais-body ais-stats--body"]';

    searchMenu(searchText) {
        cy.get(SearchJobsPage.ALL_JOBS_SEARCH_FIELD).should('be.visible').click().clear().type(searchText);
    }

    clickSearchButtonByText(buttonText) {
        cy.get(SearchJobsPage.SEARCH_BUTTON_ELEMENT).contains(buttonText).click({force: true});
    }

    verifyResultsCountAtLeastOne() {
        // Wait for AJAX requests to complete
        utilities.waitForAjax();

        cy.get(SearchJobsPage.SEARCH_RESULTS_COUNT_ELEMENT).contains('Results').should('be.visible').then($parentElement => {
            cy.wrap($parentElement).invoke('text').then((resultText) => {
                const resultCount = parseInt(resultText.match(/\d+/)[0]);

                resultCount < 1 ?
                    (() => { throw new Error("Expected at least 1 search result, but found " + resultCount) })() :
                    expect(resultCount).to.be.gte(1);
            });
        });
    }

}