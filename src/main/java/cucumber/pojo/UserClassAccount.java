package cucumber.pojo;

public class UserClassAccount {
    private int accountnumber;
    private String email;
    private int balance;

    @Override
    public String toString() {
        return "UserClassAccount{" +
                "accountnumber=" + accountnumber +
                ", email='" + email + '\'' +
                ", balance=" + balance +
                '}';
    }

    public UserClassAccount(int accountnumber, String email, int balance) {
        this.accountnumber = accountnumber;
        this.email = email;
        this.balance = balance;
    }

    public int getAccountnumber() {
        return accountnumber;
    }

    public void setAccountnumber(int accountnumber) {
        this.accountnumber = accountnumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }
}
