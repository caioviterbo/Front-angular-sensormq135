import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from './../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
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

  constructor(private firestoreService: AngularFirestore) {
  }

  ngOnInit(): void {
    this.dados$ = this.firestoreService.collection('dadosSensor').valueChanges();
    this.dados$.subscribe(dados => {
      this.dataSource = new MatTableDataSource(dados);
      console.log('Dados recebidos: ' +dados);
    })

  }
}
