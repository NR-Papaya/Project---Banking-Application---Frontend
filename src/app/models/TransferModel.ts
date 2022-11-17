export class TransferModel {
  constructor(
    public sender_account_number: number,
    public receiver_account_number: number,
    public value: number,
    public description: string
  ) {
    this.sender_account_number = sender_account_number;
    this.receiver_account_number = receiver_account_number;
    this.value = value;
    this.description = description;
  }
}
