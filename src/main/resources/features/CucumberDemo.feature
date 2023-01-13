@Smoke
Feature: Cucumber Demo practice

  Scenario: Order a Model S
    Given user is on Tesla.com
    And user clicks Model S header
    Then user should see Model S text
    When user scroll down the page to Order now
    And user click Order Now button
    Then user should Purchase price
    When user clicks on Continue to Payment button
    Then user should see Your Model S text
    When user click on Order with card button
    Then First name,last name, Email input fields should appear
    And enter in First name Asan
    And enter in Last name Daniyarov
    And enter in Email field asan99@gmail.com


  Scenario: Order a Model X
    Given user is on Tesla\.com
    And user clicks Model X header
    Then user should see Model X text