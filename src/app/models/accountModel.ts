export class AccountModel {

  constructor(
    public account_number: number,
    public account_user_id: number,
    public account_type: string,
    public account_balance: number,
    public account_name: string
  ) {
    this.account_number = account_number;
    this.account_user_id = account_user_id;
    this.account_type = account_type;
    this.account_balance = account_balance;
    this.account_name = account_name;
  }
}
