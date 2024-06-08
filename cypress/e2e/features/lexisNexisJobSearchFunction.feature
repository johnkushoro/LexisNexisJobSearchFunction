Feature: Job Search Functionality on LexisNexis Careers Page

  Background:

    Given I am on the homepage of "LEXISNEXIS_APPLICATION"

  Scenario: Verify Job Search Functionality for "Automation Tester" on LexisNexis Careers Page

    When the user clicks on "About Us" in the top banner dropdown
    And the user clicks on "Careers" on the landing page
    And the user clicks on "Search jobs"
    And the user searches for "automation tester" and clicks the "Search" button
    Then the user should see at least one search result
