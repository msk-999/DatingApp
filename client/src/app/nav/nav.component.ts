import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr/public_api';
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

  constructor(public acoountservice: AccountService, private router: Router, 
    private toastr: ToastrService) {

  }
  ngOnInit(): void {

  }


  login() {

    this.acoountservice.login(this.model).subscribe({
      next: _ => this.router.navigateByUrl('/members'),
      error: error => this.toastr.error(error.error)
    })
  }
  logout() {
    this.acoountservice.logout();
    this.router.navigateByUrl('/')

  }

}
