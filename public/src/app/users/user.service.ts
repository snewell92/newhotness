import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs/Observable';  
import { Observer } from 'rxjs/Observer';  
import * as feathers from 'feathers-client';

import { APIService } from '../api.service';  
import { User } from './user';

@Injectable()
export class UserService extends APIService {

  public users$: Observable<User[]>;
  private usersObserver: Observer<User[]>;
  private feathersService: any;
  private dataStore: {
    users: User[]
  };

  constructor() {
    super();

    // ensure fetch is polyfilled
    const feathersApp = feathers().configure(feathers.rest(this.url).fetch(fetch));
    this.feathersService = feathersApp.service('users');

    this.feathersService.on('created', user => this.onCreated(user));
    this.feathersService.on('updated', user => this.onUpdated(user));
    this.feathersService.on('removed', user => this.onRemoved(user));

    this.users$ = new Observable(observer => this.usersObserver = observer);

    this.dataStore = { users: [] };
  }

  public find() {
    this.feathersService.find((err, users: User[]) => {
      if (err) return console.error(err);

      this.dataStore.users = users;
      this.usersObserver.next(this.dataStore.users);
    });
  }

  private getIndex(id: number): number {
    let foundIndex = -1;

    for (let i = 0; i < this.dataStore.users.length; i++) {
      if (this.dataStore.users[i].id === id) {
        foundIndex = i;
      }
    }

    return foundIndex;
  }

  private onCreated(user: User) {
    this.dataStore.users.push(user);

    this.usersObserver.next(this.dataStore.users);
  }

  private onUpdated(user: User) {
    const index = this.getIndex(user.id);

    this.dataStore.users[index] = user;

    this.usersObserver.next(this.dataStore.users);
  }

  private onRemoved(user) {
    const index = this.getIndex(user.id);

    this.dataStore.users.splice(index, 1);

    this.usersObserver.next(this.dataStore.users);
  }

}
