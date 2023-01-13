package cucumber.step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ParametresStepDefs {

    @Given("^user name is Elon$")
    public void user_name_is_Elon()  {
        System.out.println("name is Elon");
        
    }

    @Given("^user surname is Mask$")
    public void user_surname_is_Mask()  {
        
    }

    @Given("^user is age (\\d+)$")
    public void user_is_age(int arg1)  {
        
    }
    @Given("^user name is \"([^\"]*)\"$")
    public void user_name_is(String username)  {
        System.out.println("Mars");
    }
    @Then("^user is happy$")
    public void user_is_happy() throws Throwable {
        System.out.println("happy");
    }
    }
