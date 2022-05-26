import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publicaciones = [
    {
      "id": "432dffds8", 
      "imagen": "assets/1.jpg",

    }, 
    {
      "id": "432dffds8dlkfd", 
      "imagen": "assets/2.jpg",

    }, 
    {
      "id": "3c47828373", 
      "imagen": "assets/3.jpg",

    }, 
    {
      "id": "2b38219391", 
      "imagen": "assets/4.jpg",

    }, 
    {
      "id": "1a44321134", 
      "imagen": "assets/5.jpg",

    }
  ]

}