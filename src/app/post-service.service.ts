import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  //url = 'https://jsonplaceholder.typicode.com/posts';
  private url = 'http://192.168.1.66:5000/usuarios';
  private url2 = 'http://192.168.1.66:5000/camara/1';
  //devtool: "source-map"

  constructor(public http: HttpClient) { }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
        console.log('datos cosultados exitosamete');
      }, error => {
        console.log(error);
      });
    });
  }


  getPosts2() {
    return new Promise(resolve => {
      this.http.get(this.url2).subscribe(data => {
        resolve(data);
        console.log('datos cosultados exitosamete');
        console.log(data);
      }, error => {
        console.log(error);
      });
    });
  }

  /*   addPost(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.url, JSON.stringify(data))
          .subscribe(response => {
            resolve(response);
          }, (error) => {
            reject(error);
          });
      });
    } */



}
