package cucumber.pojo;

import cucumber.bankup.Bank;

public class AccountPOJO {
    private int accountNumber;
    private String email;
    private int balance;
    private Bank bankName;
    private int senderAccountNumber;
    private String receiverBankName;
    private int amount;
    private String receiverEmail;

    public int getAccountNumber() {
        return accountNumber;
    }

    public String getEmail() {
        return email;
    }

    public int getBalance() {
        return balance;
    }

    public Bank getBankName() {
        return bankName;
    }

    public int getSenderAccountNumber() {
        return senderAccountNumber;
    }

    public String getReceiverBankName() {
        return receiverBankName;
    }

    public double getAmount() {
        return amount;
    }

    public String getReceiverEmail() {
        return receiverEmail;
    }

    public AccountPOJO(int accountNumber, String email, int balance, Bank bankName,
                       int senderAccountNumber, String receiverBankName, int amount, String receiverEmail) {
        this.accountNumber = accountNumber;
        this.email = email;
        this.balance = balance;
        this.bankName = bankName;
        this.senderAccountNumber = senderAccountNumber;
        this.receiverBankName = receiverBankName;
        this.amount = amount;
        this.receiverEmail = receiverEmail;
    }





    @Override
    public String toString() {
        return "AccountPOJO{" +
                "accountNumber=" + accountNumber +
                ", email='" + email + '\'' +
                ", balance=" + balance +
                ", bankName='" + bankName + '\'' +
                ", senderAccountNumber=" + senderAccountNumber +
                ", receiverBankName='" + receiverBankName + '\'' +
                ", amount=" + amount +
                ", receiverEmail='" + receiverEmail + '\'' +
                '}';
    }
}






