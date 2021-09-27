import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from "../model/account";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  productFormGrounp!: FormGroup;
  @Output()
  @Output()
  edit = new EventEmitter();
  @Input()
  list: Account[] = [];

  constructor() {
  }


  ngOnInit(): void {
    this.productFormGrounp = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),

    })
  }

  createAccount() {
    this.list.push(this.productFormGrounp.value)
    this.productFormGrounp.reset()
  }

  deleteAccount(username: any) {
    for (let i = 0; this.list.length; i++) {
      if (this.list[i].username === username) {
        this.list.splice(i, 1)
        return;
      }
    }
  }

  showEdit(username: any) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].username === username) {
        this.productFormGrounp?.get('username')?.setValue(this.list[i].username)
        this.productFormGrounp?.get('password')?.setValue(this.list[i].password)
        return;
      }
    }
  }

  editAccount() {

    this.edit.emit(this.productFormGrounp?.value);
    this.productFormGrounp?.reset();

  }


}
