import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fintech';


  toggleControl = new FormControl(false);

  constructor(private _route: Router) { 
    this._route.navigate(['login']);
  }

  ngOnInit(): void {



  }



}
