import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  perrillos = [
    {
      "usuario": "@cheemsfuerte",
      "src": "assets/cheems.jpg",
      "caption": "Puedo correr 5km"
    },
    {
      "usuario": "@megustanmucho",
      "src": "assets/gusta.jpg",
      "caption": "a mi me gustan mucho de esas"
    },
  ]

}