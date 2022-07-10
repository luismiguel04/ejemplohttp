import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  //url = 'https://jsonplaceholder.typicode.com/posts';
 private url='http://192.168.1.70:5000/usuarios';
  //devtool: "source-map"

  constructor(public http: HttpClient) { }

  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
          console.log('datos cosultados exitosamete');
      },error=>{
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
