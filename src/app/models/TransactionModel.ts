export class TransactionModel {

  
  constructor(public tx_id: number,
    public tx_account_number : number, 
    public tx_foreign_account_number: number, 
    public tx_value : number, 
    public tx_type : string,
    public tx_date: Date, 
    public tx_description:string) {

      this.tx_id = tx_id;
      this.tx_account_number= tx_account_number;
      this.tx_foreign_account_number= tx_foreign_account_number;
      this.tx_value=tx_value;
      this.tx_type=tx_type;
      this.tx_date= tx_date;
      this.tx_description= tx_description;
 
  }
}