
export default class HomePage {

    static COOKIE_BANNER_BUTTON_SELECTOR = '#onetrust-accept-btn-handler';

    clickCookieBannerButtonByText(buttonText) {
        cy.get(HomePage.COOKIE_BANNER_BUTTON_SELECTOR)
            .contains(buttonText, { matchCase: false }).should('be.visible').click();
    }
}