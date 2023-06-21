Feature: sample run testing using wdio

  Scenario: As a user, I can launch application
    Given I am on the login page
    When I validate page launched
    Then I verify google search bar is displayed