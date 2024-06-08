export default class TopBanner {

    static TOP_BANNER_DROPDOWN_BUTTON_SELECTOR = 'a[data-toggle="dropdown"]';

    clickTopBannerDropdownByText(buttonText) {
        cy.get(TopBanner.TOP_BANNER_DROPDOWN_BUTTON_SELECTOR)
            .contains(buttonText, { matchCase: false })
            .should('be.visible')
            .click();
    }
}