import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { PostServiceService } from '../../../src/app/post-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  vidUrl: SafeResourceUrl;
  arrayPosts: any;


  constructor(private domSatizer: DomSanitizer, public postServiceService: PostServiceService) { }

  ngOnInit() {

    this.getPosts()
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl
    /*     ("https://" + this.arrayPosts[1]);
      console.log(this.arrayPosts[0])
  
      console.log("ip es correcta") */

  }
  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServiceService.getPosts2()
      .then(data => {
        this.arrayPosts = data;
        console.log();
      });
  }







} 
