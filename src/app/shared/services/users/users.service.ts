import { Injectable } from '@angular/core';
import { createUser, IUser, loginUser } from './types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
  ) { }

  public createUser(account: createUser) {

    if (localStorage.getItem('barbershop-accounts') === null) {
      let accounts = [];
      accounts.push(account);
      window.localStorage.setItem('barbershop-accounts', JSON.stringify(accounts));
      return
    }

    let accounts = JSON.parse(window.localStorage.getItem('barbershop-accounts'));
    accounts.push(account)
    
    window.localStorage.setItem('barbershop-accounts', JSON.stringify(accounts))
  }

  public login(user: loginUser) {
    const accounts: IUser[] = JSON.parse(localStorage.getItem('barbershop-accounts'))
    
    const userFound = accounts.find(account => {
      return account.email === user.email && account.password === user.password
    })

    window.localStorage.setItem('account', JSON.stringify(userFound))
  }

  public logout() {

  }



}