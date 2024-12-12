
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dados-sensor',
  templateUrl: './dados-sensor.component.html',
  styleUrls: ['./dados-sensor.component.scss']
})
export class DadosSensorComponent implements OnInit {
  dados$!: Observable<any[]>;
  displayColumns: string[] = ['id', 'nome', 'valor', 'unidade'];
  dataSource!: MatTableDataSource<any>;

  constructor() {
  }

  ngOnInit(): void {


  }
}
