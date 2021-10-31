import { MediaMatcher } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent  implements OnDestroy{

  mobileQuery: MediaQueryList;
  public fillerNav = [ 
    {navitem:'Trabajo Práctico Número 1', navLink:'../home/tp1' },
    {navitem:'Trabajo Práctico Número 2', navLink:'../home/tp2' },  
    {navitem:'Trabajo Práctico Número 3', navLink:'../home/tp3' },
    {navitem:'Trabajo Práctico Número 4', navLink:'../home/tp4' }  
  ]

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private overlay: OverlayContainer
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  
  //dark mode
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }



}
