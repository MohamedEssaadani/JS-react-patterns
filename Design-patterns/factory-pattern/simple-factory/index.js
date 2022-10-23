// Account

class Account {
  constructor(accountNumber, balance, currency, accountType) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._currency = currency;
    this._accountType = accountType;
  }
}

// factory
const AccountFactory = {
  makeAccount: (accountNumber, balance, currency, accountType) => {
    return new Account(accountNumber, balance, currency, accountType);
  },
};

const account1 = AccountFactory.makeAccount(5545, 5555, "MAD", "CURRENT");

console.log(account1);
