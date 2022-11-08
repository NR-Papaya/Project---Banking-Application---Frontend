export class LoginCredentialModel {
  constructor(public user_name: string, public user_password: string) {
    this.user_name = user_name;
    this.user_password = user_password;
  }
}
