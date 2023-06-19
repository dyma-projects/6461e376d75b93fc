import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef<HTMLInputElement>;

  constructor(private userService: UserServiceService) {} // il faut probablement injecter un service ici !

  ngOnInit() {}

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.userService.addUser(username);
      this.el.nativeElement.value = '';
    }
  }
}
