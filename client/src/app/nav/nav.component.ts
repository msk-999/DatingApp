import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  // currentUser$: Observable<User | null> =of(null);

  constructor(public acoountservice: AccountService) {

  }
  ngOnInit(): void {
    // this.currentUser$= this.acoountservice.currentUser$;
  }

  // getCurrentUser() {
  //   this.acoountservice.currentUser$.subscribe({
  //     next: user => this.loggedIn = !!user,
  //     error: error => console.log(error)
  //   })
  // }
  login() {

    this.acoountservice.login(this.model).subscribe({
      next: response => {
        console.log(response);
        // this.loggedIn = true;
      },
      error: error => console.log(error)
    })
  }
  logout() {
    this.acoountservice.logout();
    // this.loggedIn = false;
  }

}
