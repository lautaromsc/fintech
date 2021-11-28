import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Icons } from 'src/assets/icons/iconos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fintech';


  toggleControl = new FormControl(false);

  constructor(
    private _route: Router,
    public iconRegistry: MatIconRegistry, 
    public sanitizer: DomSanitizer
  ) { 
    //this._route.navigate(['login/signin']);

    iconRegistry.addSvgIconLiteral('add', sanitizer.bypassSecurityTrustHtml(new Icons().ADD));
    iconRegistry.addSvgIconLiteral('more_vert', sanitizer.bypassSecurityTrustHtml(new Icons().MORE_VERT));
    iconRegistry.addSvgIconLiteral('brightness', sanitizer.bypassSecurityTrustHtml(new Icons().THUMBUP_ICON));
    iconRegistry.addSvgIconLiteral('bedtime', sanitizer.bypassSecurityTrustHtml(new Icons().THUMBUP_ICON2));
    iconRegistry.addSvgIconLiteral('menu', sanitizer.bypassSecurityTrustHtml(new Icons().THUMBUP_ICON3));
    iconRegistry.addSvgIconLiteral('trash', sanitizer.bypassSecurityTrustHtml(new Icons().TRASH));
    iconRegistry.addSvgIconLiteral('save', sanitizer.bypassSecurityTrustHtml(new Icons().SAVE));
    iconRegistry.addSvgIconLiteral('close', sanitizer.bypassSecurityTrustHtml(new Icons().CLOSE));
    iconRegistry.addSvgIconLiteral('favorite', sanitizer.bypassSecurityTrustHtml(new Icons().FAVORITE));
  }

  ngOnInit(): void {



  }



}
