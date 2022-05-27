import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private bd : BdServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log("Submit")
  }

  nuevoPost : any = {
    "caption": "", 
    "id": "", 
    "imagen": "assets/Ruffles.jpg", 
    "usuario": "@ruffles"
  }

  subir() {
    this.bd.postPublicacion(this.nuevoPost).subscribe();
  }

}