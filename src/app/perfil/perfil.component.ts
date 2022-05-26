import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre": "Ruffles", 
    "usuario": "@ruffles", 
    "descripcion": "Guau", 
    "followers": 120, 
    "following": 40, 
    "posts": 5 ,
    "fotodeperfil": "assets/Ruffles.jpg"
  }

  editando = false;

  toggleEditar(): void {
    this.editando = !this.editando;
  }

  @Input() bio: string = "";

  guardarBio(): void {
    this.usuario.descripcion = this.bio;
  }  
}
