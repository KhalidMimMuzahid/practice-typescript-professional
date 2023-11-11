{
  //getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number; // private property er age underscore (_) add korte hoi, eita naming convention
    protected _balance: number; // protected properties instance er moddhe pauya jai na kintu chield class er moddhe pauya jai
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    //   public addDeposit(amount: number) {
    //     this._balance = this._balance + amount;
    //   }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    //   public myBalance() {
    //     return this._balance;
    //   }
    get balance() {
      return this._balance;
    }
  }

  // class StudentAccount extends BankAccount {
  //   constructor(id: number, name: string, balance: number) {
  //     super(id, name, balance);
  //   }
  //   test() {
  //     console.log(this._balance);
  //   }
  // }
  const goribManuserAccount = new BankAccount(111, "Gorib", 1500);
  // goribManuserAccount.id= 444 // readonly propoerty modified hoi na
  // goribManuserAccount.balance = 1000; private property directly change kora jai na
  //   goribManuserAccount.addDeposit(500);
  goribManuserAccount.deposit = 100;
//   const myBalance = goribManuserAccount.myBalance();
  const myBalance = goribManuserAccount.balance
  console.log(myBalance);

  //
}
