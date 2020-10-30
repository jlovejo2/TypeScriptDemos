export class CheckingAccount {
    private _balance: number = 0;
    title: string;

    get balance() {
        return this._balance
    }

    set balance(value:number) {
        this._balance = value;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    withdrawal(amount: number) {
        this.balance -= amount;
    }
}

