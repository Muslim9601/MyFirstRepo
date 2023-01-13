package cucumber.bankup;

import java.util.HashMap;
import java.util.Map;

public class Bank {
    private String name;
    private Map<String,Account> accounts = new HashMap<>();

    public Bank(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "Bank{" +
                "name='" + name + '\'' +
                ", accounts=" + accounts +
                '}';
    }

    public void registrAccount(Account account){
        accounts.put(account.getEmail(),account);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(Map<String, Account> accounts) {
        this.accounts = accounts;
    }
}

