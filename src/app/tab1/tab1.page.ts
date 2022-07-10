import { Component } from '@angular/core';


import { PostServiceService } from '../../../src/app/post-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  arrayPosts:any;

  constructor( public postServiceService:PostServiceService) {}
  ngOnInit() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }
  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServiceService.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }

}
