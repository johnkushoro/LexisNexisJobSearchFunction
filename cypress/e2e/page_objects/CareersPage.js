
export default class CareersPage {
    static SEARCH_JOBS_SELECTOR = 'a.score-button.btn-red';

    clickCookieBannerButtonByText(buttonText) {
        cy.get(CareersPage.SEARCH_JOBS_SELECTOR)
            .contains(buttonText, { matchCase: false }).should('be.visible').click();
    }
}
