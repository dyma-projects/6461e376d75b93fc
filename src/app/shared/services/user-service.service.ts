import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  listUsers: string[] = [];
  public users$: BehaviorSubject<string[]> = new BehaviorSubject(null);

  constructor() {}

  public addUser(nom: string) {
    this.listUsers.push(nom);
    this.users$.next(this.listUsers);
  }
}
