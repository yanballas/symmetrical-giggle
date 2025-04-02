export class Store {
  private _balance: number = 1000;

  get balance(): number {
    return this._balance;
  }

  public updateBalance(amount: number, action: boolean): void {
    if (action) {
      this._balance += amount;
    } else {
      this._balance -= amount;
    }
  }
}
