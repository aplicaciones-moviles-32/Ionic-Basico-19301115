import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.scss']
})
export class HistoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  historias: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}