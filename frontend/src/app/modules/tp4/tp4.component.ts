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
    {tab:'Cuentas', link: 'cuentas', index:0}, 
    {tab:'Historial', link: 'historial', index:1}, 
    {tab:'Transferencias', link: 'transferencias', index:2}, 
  ];

  activeLink = this.links[0].tab;


}
