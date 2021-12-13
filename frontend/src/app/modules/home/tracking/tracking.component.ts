import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Socket} from "ngx-socket-io";
import { MapCustomService } from 'src/app/services/mapbox/map-custom.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null, end: null};

  constructor(
    private mapCustomService: MapCustomService, 
    private renderer2: Renderer2,
    private socket: Socket
  ) {
  
  }

  async ngOnInit() {

    this.mapCustomService.buildMap().then(({geocoder, map}) => {
        // this.asGeoCoder
        console.log("eee")
        //this.renderer2.appendChild(this.asGeoCoder.nativeElement, geocoder.onAdd(map) );
        console.log('All is OK');
    }).catch((err) => {
        console.log('Error ', err);
    });

    this.mapCustomService.cbAddress.subscribe((getPoint) => {
      console.log("holii")
      if (this.modeInput === 'start') {
        this.wayPoints.start = getPoint;
      }
      if (this.modeInput === 'end') {
        this.wayPoints.end = getPoint;
      }
    });

    this.socket.fromEvent('position').subscribe( async ( {coords} ) => {  
      console.log('Server Desde ', coords);
      this.mapCustomService.addMarkerCustom(coords)
    })

    setTimeout(()=>{                       
      this.drawRoute()
    }, 1000);

  }

  drawRoute(): void {

    console.log('***** PUNTOS de ORIGEN y DESTINO', this.wayPoints)
    /* const coords = [ this.wayPoints.start.center, this.wayPoints.end.center ];*/

    const coords = [ [-58.58333, -34.41667], [-58.620629, -34.469964] ];

    this.mapCustomService.loadCoords(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }

  testMarker(): void {
    this.mapCustomService.addMarkerCustom([-58.6033381, -34.6158037]);
  }
}

export class WayPoints {
  start: any;
  end: any
}
