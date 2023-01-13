package cucumber.step_defs;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.bankup.Account;
import cucumber.bankup.Bank;
import cucumber.pojo.AccountPOJO;
import org.junit.jupiter.api.Assertions;

import java.util.List;

public class BankDemoDefs {
    Account testAccount1;
    Account testAccount2;
    Bank kicb = new Bank("Kyrgyz Investment Credit Bank");


    @Given("^the following account are created$")
    public void the_following_account_are_created(List<AccountPOJO> userAccount ){
        testAccount1 = new Account(userAccount.get(0).getAccountNumber(),userAccount.get(0).getEmail(),
                userAccount.get(0).getBalance(),userAccount.get(0).getBankName());
          testAccount2 = new Account(userAccount.get(1).getAccountNumber(),userAccount.get(1).getEmail(),
                userAccount.get(1).getBalance(),userAccount.get(1).getBankName());


    }

    @When("^the following transfers are executed$")
    public void the_following_transfers_are_executed(List<AccountPOJO> transfer)  {
   testAccount1.transferViaMBankElkart(testAccount2.getEmail(),transfer.get(0).getAmount(),testAccount2.getGetBankname());
   testAccount2.transferViaMBankElkart(testAccount1.getEmail(),transfer.get(1).getAmount(),testAccount1.getGetBankname());

        
    }

    @Then("^the accounts should have the following balance amounts$")
    public void the_accounts_should_have_the_following_balance_amounts(List <AccountPOJO> balance)  {
        Assertions.assertEquals(testAccount1.getBalance(),balance.get(0).getBalance());
        Assertions.assertEquals(testAccount2.getBalance(),balance.get(1).getBalance());

        
    }

}
