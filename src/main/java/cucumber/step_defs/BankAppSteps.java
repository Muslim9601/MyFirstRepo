package cucumber.step_defs;

import com.sun.deploy.cache.BaseLocalApplicationProperties;
import com.sun.deploy.config.Config;
import cucumber.bankup.Account;
import cucumber.pojo.UserClassAccount;
import cucumber.api.java.en.Given;

import java.util.List;

public class BankAppSteps {

    @Given("^Following account is created$")
    public void following_account_is_created(List<UserClassAccount> userClassAccounts) {
        System.out.println("User's email is " + userClassAccounts.get(0).getEmail());


//        Account jhonApp = new Account(userClassAccounts.get(0).getAccountnumber(),userClassAccounts.get(0).getEmail(),
//                userClassAccounts.get(0).getBalance(),userClassAccounts.get(0).getEmail());
//        System.out.println("jhonApp " + jhonApp);
//
//    }
    }
}