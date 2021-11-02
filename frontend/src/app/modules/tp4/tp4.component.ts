import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajo-cuatro',
  templateUrl: './tp4.component.html',
  styleUrls: ['./tp4.component.scss']
})
export class Tp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  links = [ 
    {tab:'Transferencias', link: 'transferencias', index:0}, 
    {tab:'Historial', link: 'historial', index:1}, 
  
  ];

  activeLink = this.links[0].tab;


}
