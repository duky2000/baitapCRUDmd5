import {Component} from '@angular/core';
import {Account} from "./model/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-account';
  list: Account[] = []

  constructor() {
    this.list.push(new Account("ky", "123"))
    this.list.push(new Account("tam", "321"))
    this.list.push(new Account("dat", "213"))
  }

  editAccount(account: Account) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].username === account.username) {
        this.list[i] = account;
        return;
      }
    }
  }
}
