export class RegisterModel {
  //(String user_name, String user_password, String user_first_name, String user_last_name,
  //    String user_email)

  constructor(
    public user_name: string,
    public user_password: string,
    public user_first_name: string,
    public user_last_name: string,
    public user_email: string
  ) {
    this.user_name = user_name;
    this.user_password = user_password;
    this.user_first_name = user_first_name;
    this.user_last_name = user_last_name;
    this.user_email = user_email;
  }
}
