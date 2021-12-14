import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  public logout(){
    localStorage.setItem('userID', '')
    this.router.navigate(['landing-page']);

  }

  reload(){
    window.location.href =   environment.front + '/home/shipping'
  }
 
  reloadTracking(){
    window.location.href =  environment.front + 'home/tracking'
  }

}
