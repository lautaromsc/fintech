import { Component, OnInit, ViewChild } from '@angular/core';
import { FintechService } from 'src/app/services/fintech.service';
import { MatTableDataSource } from '@angular/material/table';
import { iTransfer, Transfer } from 'src/app/models/transfer';
import { MatSort } from '@angular/material/sort';

const ELEMENT_DATA: iTransfer[] = [];

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  public preventSingleClick = false;
  public mensajeError: string;
  public error: boolean = false;
  public displayedColumns: string[] = ['id','from_cvu','to_cvu','amount'];

  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(
    public _crud: FintechService,
  ) {}

  ngOnInit(): void {
   this.get();
  }

  private get(): void {
    this._crud.getHistory('000002774751642633288').subscribe((data: any) => {
      console.log(data);
      try {
        const objArray: Transfer[] = [];
        Object.values(data.body.transfersSend).forEach((item: Transfer)  => {
          objArray.push(item)
        });
        this.dataSource = new MatTableDataSource(objArray);
        this.dataSource.sort = this.sort;
      } catch {
        this.error = true
      }
    },
      (err) => {
        console.log(err);
        this.mensajeError += JSON.stringify(err);
        this.error = true;
    });
  }






}
