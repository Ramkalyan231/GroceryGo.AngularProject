import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  loggedInUser: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkUser();
  }

  checkUser() {
    const user = localStorage.getItem('user');
    const loggedIn = localStorage.getItem('loggedIn');
    if (user && loggedIn === 'true') {
      this.loggedInUser = JSON.parse(user);
    } else {
      this.loggedInUser = null;
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }
}