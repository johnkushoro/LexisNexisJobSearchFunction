
export default class LandingPage {
    static LEARN_MORE_LINK_TEXT = '.caption';


    clickLearnMoreNearHeading(headingText) {
        cy.contains(LandingPage.LEARN_MORE_LINK_TEXT, headingText).should('be.visible').within(() => {
            cy.get('a').invoke('removeAttr', 'target').contains('Learn More', { matchCase: false }).click({ force: true });
        });
    }

}
