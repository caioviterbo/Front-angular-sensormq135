import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SupabeseService } from '../services/supabese.service';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dados-sensor',
  templateUrl: './dados-sensor.component.html',
  styleUrls: ['./dados-sensor.component.scss']
})
export class DadosSensorComponent implements OnInit {
  displayColumns: string[] = ['qualidadeAr', 'qtdCarbono', 'qualidadeGeral', 'timeStamp'];
  dataSource!: MatTableDataSource<any>;
  totalItems: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private supabaseService: SupabeseService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.carregarPagina(1, 10);
  }

  carregarPagina(page: number, pageSize: number): void {
    this.supabaseService.getSensorData(page, pageSize, 'Sensores').then(response => {
      response.data.forEach((item: any) => {
        if (item.timeStamp) {
          item.timeStamp = this.datePipe.transform(item.timeStamp, 'dd/MM/yyyy HH:mm:ss');
        }
      })

      this.dataSource = new MatTableDataSource(response.data);
      this.totalItems = response.count;

      if (this.paginator) {
        this.paginator.pageIndex = page - 1;
        this.paginator.pageSize = pageSize;
        this.paginator.length = this.totalItems;
      }
    }).catch(error => {
      console.error('Erro ao carregar a página:', error);
    });
  }

  onPageChange(event: any): void {
    const page = event.pageIndex + 1;
    const pageSize = event.pageSize;
    this.carregarPagina(page, pageSize);
  }
}
