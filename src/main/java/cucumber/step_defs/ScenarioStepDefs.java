package cucumber.step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class ScenarioStepDefs {


    @Given("^user is on \"([^\"]*)\"$")
    public void user_is_on(String arg1)  {
        System.out.println("");
       
    }

    @When("^user enter \"([^\"]*)\" in first name input field$")
    public void user_enter_in_first_name_input_field(String arg1)  {
        System.out.println("First name");
    }

    @When("^user enter \"([^\"]*)\" in last name input field$")
    public void user_enter_in_last_name_input_field(String arg1)  {
        System.out.println("Last name");
       
    }

    @When("^user enter \"([^\"]*)\" in birthday input field$")
    public void user_enter_in_birthday_input_field(String arg1)  {
        System.out.println("Birthday");
       
    }

    @When("^user enter \"([^\"]*)\" in login input field$")
    public void user_enter_in_login_input_field(String arg1)  {
        System.out.println("Login");
       
    }

    @When("^user enter \"([^\"]*)\" in password input field$")
    public void user_enter_in_password_input_field(String arg1)  {
        System.out.println("Password");
       
    }

    @When("^user enter \"([^\"]*)\" in age input field$")
    public void user_enter_in_age_input_field(String arg1)  {
        System.out.println("Age");
       
    }
    }

