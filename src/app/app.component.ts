import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InstaApp';
  total= 90;

  esCierto = true;

  imagenes = [
    "assets/gusta.jpg",
    "assets/gusta.jpg",
    "assets/cheems.jpg",
    "assets/cheems.jpg",
    "assets/gusta.jpg"
  ];

  perfil = true;

  togglePerfil(): void {
    this.perfil = !this.perfil;
  }
}
