import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  public users!: string[];
  private subscription: Subscription = new Subscription();

  constructor(
    private userService: UserServiceService // il faut probablement injecter un service ici !
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.userService.users$.subscribe((reponse: string[]) => {
        this.users = reponse;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
