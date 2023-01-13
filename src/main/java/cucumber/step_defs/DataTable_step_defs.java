package cucumber.step_defs;

import com.sun.deploy.cache.BaseLocalApplicationProperties;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

import java.util.List;

public class DataTable_step_defs {

    @Given("^customer name is \"([^\"]*)\"$")
    public void customer_name_is(String arg1, DataTable customerName) {

        List<List<String>> listOfCustomer = customerName.raw();


        for (List<String> i : listOfCustomer) {
            for (String y : i) {
                System.out.println("user name is " + y);
            }
        }
        System.out.println("Choose first value in the table: " + listOfCustomer.get(2).get(2));

    }

    @Given("^user surname is$")
    public void user_surname_is(DataTable customerSurname) {

        List<List<String>> customerSurnames = customerSurname.raw();
        for (List<String> i : customerSurnames) {
            for (String y : i) {
                System.out.println("user surname is " + y);
            }

        }

    }
}
