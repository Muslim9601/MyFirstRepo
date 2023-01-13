Feature: BankUpp
@Pojo
  Scenario: Transfer money to another account
    Given Following account is created
    | accountnumber |      email    | balance |
    | 123           | ghon@email.ru |  2000   |


  @Bank
  Scenario: Data Tables with POJOs
    Given the following account are created
      | accountNumber | email                 | balance | bankName |
      | 123456        | testAccount@gmail.com | 200     | KICB     |
      | 11111         | test2@gmail.com       | 500     | KICB     |
    When the following transfers are executed
      | senderAccountNumber | amount | receiverEmail          | receiverBankName |
      | 123456              | 1200   | test2@gmail.com        | KICB             |
      | 11111               | 500    | ttestAccount@gmail.com | KICB             |
    Then the accounts should have the following balance amounts
      | accountNumber | balance |
      | 123456        | 200     |
      | 11111         | 500     |