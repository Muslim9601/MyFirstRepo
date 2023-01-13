$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ScenarioOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario outline practice",
  "description": "",
  "id": "scenario-outline-practice",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Demo1",
  "description": "",
  "id": "scenario-outline-practice;demo1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user enter \"\u003cfirst name\u003e\" in first name input field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enter \"\u003clast name\u003e\" in last name input field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"\u003cbirthday\u003e\" in birthday input field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"\u003clogin\u003e\" in login input field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter \"\u003cpassword\u003e\" in password input field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"\u003cage\u003e\" in age input field",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "scenario-outline-practice;demo1;",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "birthday",
        "login",
        "password",
        "age"
      ],
      "line": 15,
      "id": "scenario-outline-practice;demo1;;1"
    },
    {
      "cells": [
        "Ghon",
        "Trabolta",
        "23.05.2001",
        "Ghon@mail.ru",
        "qwerty123",
        "19"
      ],
      "line": 16,
      "id": "scenario-outline-practice;demo1;;2"
    },
    {
      "cells": [
        "Asan",
        "Iterator",
        "14.07.1998",
        "Asan@mail.ru",
        "qwer123",
        "24"
      ],
      "line": 17,
      "id": "scenario-outline-practice;demo1;;3"
    },
    {
      "cells": [
        "Nursultan",
        "Musakunov",
        "06.05.1992",
        "Nuta@mail.ru",
        "nuta92",
        "30"
      ],
      "line": 18,
      "id": "scenario-outline-practice;demo1;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "some precondation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on \"http://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.facebook.com/",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_is_on(String)"
});
formatter.result({
  "duration": 107470000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Demo1",
  "description": "",
  "id": "scenario-outline-practice;demo1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enter \"Ghon\" in first name input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Trabolta\" in last name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"23.05.2001\" in birthday input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"Ghon@mail.ru\" in login input field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter \"qwerty123\" in password input field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"19\" in age input field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Ghon",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_first_name_input_field(String)"
});
formatter.result({
  "duration": 109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trabolta",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_last_name_input_field(String)"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23.05.2001",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_birthday_input_field(String)"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ghon@mail.ru",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_login_input_field(String)"
});
formatter.result({
  "duration": 83600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty123",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_password_input_field(String)"
});
formatter.result({
  "duration": 85700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_age_input_field(String)"
});
formatter.result({
  "duration": 89600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "some precondation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on \"http://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.facebook.com/",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_is_on(String)"
});
formatter.result({
  "duration": 116600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Demo1",
  "description": "",
  "id": "scenario-outline-practice;demo1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enter \"Asan\" in first name input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Iterator\" in last name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"14.07.1998\" in birthday input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"Asan@mail.ru\" in login input field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter \"qwer123\" in password input field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"24\" in age input field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Asan",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_first_name_input_field(String)"
});
formatter.result({
  "duration": 116300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iterator",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_last_name_input_field(String)"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.07.1998",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_birthday_input_field(String)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asan@mail.ru",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_login_input_field(String)"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qwer123",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_password_input_field(String)"
});
formatter.result({
  "duration": 111500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_age_input_field(String)"
});
formatter.result({
  "duration": 104500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "some precondation",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on \"http://www.facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.facebook.com/",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_is_on(String)"
});
formatter.result({
  "duration": 139600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Demo1",
  "description": "",
  "id": "scenario-outline-practice;demo1;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enter \"Nursultan\" in first name input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enter \"Musakunov\" in last name input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter \"06.05.1992\" in birthday input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter \"Nuta@mail.ru\" in login input field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter \"nuta92\" in password input field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enter \"30\" in age input field",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Nursultan",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_first_name_input_field(String)"
});
formatter.result({
  "duration": 190800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Musakunov",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_last_name_input_field(String)"
});
formatter.result({
  "duration": 127800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06.05.1992",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_birthday_input_field(String)"
});
formatter.result({
  "duration": 608500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nuta@mail.ru",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_login_input_field(String)"
});
formatter.result({
  "duration": 111700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nuta92",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_password_input_field(String)"
});
formatter.result({
  "duration": 102200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    }
  ],
  "location": "ScenarioStepDefs.user_enter_in_age_input_field(String)"
});
formatter.result({
  "duration": 237900,
  "status": "passed"
});
});