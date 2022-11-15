import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageUserHomeComponent } from './components/pages/page-user-home/page-user-home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHomeFormComponent } from './components/pages/page-home/page-home-form/page-home-form.component';
import { PageHomeRegisterFormComponent } from './components/pages/page-home/page-home-register-form/page-home-register-form.component';
import { FormsModule } from '@angular/forms';
import { DatabaseConnectionService } from './services/database-connection.service';
import { UserHomeNavComponent } from './components/pages/page-user-home/user-home-nav/user-home-nav.component';
import { UserAccountsViewComponent } from './components/pages/page-user-home/user-accounts-view/user-accounts-view.component';
import { UserProfileViewComponent } from './components/pages/page-user-home/user-profile-view/user-profile-view.component';
import { AccountsDisplayComponent } from './components/pages/page-user-home/user-accounts-view/accounts-display/accounts-display.component';
import { AccountCardsComponent } from './components/pages/page-user-home/user-accounts-view/accounts-display/account-cards/account-cards.component';
import { AccountBalanceComponent } from './components/pages/page-user-home/user-accounts-view/accounts-display/account-balance/account-balance.component';
import { TransactionsTableComponent } from './components/pages/page-user-home/user-accounts-view/accounts-display/transactions-table/transactions-table.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageUserHomeComponent,
    HeaderComponent,
    FooterComponent,
    PageHomeFormComponent,
    PageHomeRegisterFormComponent,
    UserHomeNavComponent,
    UserAccountsViewComponent,
    UserProfileViewComponent,
    AccountsDisplayComponent,
    AccountCardsComponent,
    AccountBalanceComponent,
    TransactionsTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DatabaseConnectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
