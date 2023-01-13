@Smoke
Feature: site Lexus Demo version

  Scenario: Order a Model Lexus LC 500
    Given user is on Lexus.com
    And user scroll down and choose Lexus  THE 2022 LC CONVERTIBLE INSPIRATION SERIES
    Then user choose color
    Then user click Learn More button
    And user scroll down click Press please order
    Then user clicks on continue to Payment button
    And user click on order with card button
    Then First name,Last name, Email input fields should appear
    And enter in First name Mars
    And enter in Last name Kadyrbekov
    And enter in Email field Marvel_kgz@mail.ru
    Then user click Finish button




