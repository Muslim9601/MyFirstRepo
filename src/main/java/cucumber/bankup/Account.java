package cucumber.bankup;

public class Account {
    private int AccountNumber;
    private String email;
    private double balance;
    private double amountSendToday;
    public Bank getBankname;



    public void depozit(double amount){
        balance += amount;
    }


    public boolean withdrow(double amount) {
        if (balance < amount) {
            System.err.println("insufficient founds");
            return false;
        }
        balance -= amount;
        return true;
    }

    public void transferViaMBankElkart(String EmailREsiver,double amount,Bank bank) {
        if (amountSendToday + amount > 2000) {
            System.out.println("Daily Account Exedded");
            return;
        }
        if (withdrow(amount));
        bank.getAccounts().get(EmailREsiver).depozit(amount);
        amountSendToday += amount;
    }

    public Account(int accountNumber, String email, double balance, Bank getBankname) {
        AccountNumber = accountNumber;
        this.email = email;
        this.balance = balance;
        this.getBankname = getBankname;
    }

    public int getAccountNumber() {
        return AccountNumber;
    }

    public String getEmail() {
        return email;
    }

    public double getBalance() {
        return balance;
    }

    public double getAmountSendToday() {
        return amountSendToday;
    }

    public Bank getGetBankname() {
        return getBankname;
    }

    public void userAccount(){
        return;
    }


}
