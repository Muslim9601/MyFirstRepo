package cucumber.bankup;


public class Demo {
    public static void main(String[] args) {
        Bank kcib = new Bank("Kyrgyz investment credit bank");



        Account bolotsaccount = new Account(12345, "bolot@mail.ru", 1000,kcib);
        kcib.registrAccount(bolotsaccount);

        Account asanaccount = new Account(123456,"asan@mail.ru", 1000, kcib);
        kcib.registrAccount(asanaccount);

        asanaccount.transferViaMBankElkart("bolot@mail.ru", 500, kcib);
        System.out.println("Asan transfer " + asanaccount.getBalance());

        System.out.println("Bolot balance " + bolotsaccount.getBalance());

        asanaccount.transferViaMBankElkart("bolot@mail.ru", 600,kcib);
        System.out.println("Asan balance" + asanaccount.getBalance());
        System.out.println("Bolot balance" + bolotsaccount.getBalance());
    }
}
