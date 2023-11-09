{
    // Encapsulation
    class BankAccount {
      public readonly id: number;
      public name: string;
      private _balance: number; // private property er age underscore (_) add korte hoi, eita naming convention
    //   protected _balance: number; // protected properties instance er moddhe pauya jai na kintu chield class er moddhe pauya jai
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
      public addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
      private myBalance() {
        return this._balance;
      }
      public getHiddenMethod() {
        return this.myBalance()
      }
    }

  
    class StudentAccount extends BankAccount {
      constructor(id: number, name: string, balance: number) {
        super(id, name, balance);
      }
      test() {
        console.log(this.getHiddenMethod);
      }
    }
    const goribManuserAccount = new BankAccount(111, "Gorib", 1500);
    // goribManuserAccount.id= 444 // readonly propoerty modified hoi na
    // goribManuserAccount.balance = 1000; private property directly change kora jai na
    goribManuserAccount.addDeposit(1000);
    const myBalance = goribManuserAccount.getHiddenMethod();
    console.log(myBalance);
  
    //
  }
  