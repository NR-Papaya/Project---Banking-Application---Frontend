export class TransferModel {
  constructor(
    public primary_account_number: number,
    public foreign_account_number: number,
    public value: number
  ) {
    this.primary_account_number = primary_account_number;
    this.foreign_account_number = foreign_account_number;
    this.value = value;
  }
}
