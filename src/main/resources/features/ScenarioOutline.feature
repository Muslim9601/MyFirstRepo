@ScenarioOutline
Feature: Scenario outline practice

  Background: some precondation
    Given user is on "http://www.facebook.com/"

    Scenario Outline: Demo1
      When user enter "<first name>" in first name input field
      And user enter "<last name>" in last name input field
      And user enter "<birthday>" in birthday input field
      And user enter "<login>" in login input field
      And user enter "<password>" in password input field
      And user enter "<age>" in age input field
      Examples:
     | first name  | last name   | birthday   | login        | password    | age |
     | Ghon        |  Trabolta   | 23.05.2001 | Ghon@mail.ru | qwerty123   | 19  |
     | Asan        | Iterator    | 14.07.1998 | Asan@mail.ru | qwer123     | 24  |
     | Nursultan   | Musakunov   | 06.05.1992 | Nuta@mail.ru | nuta92      | 30  |
