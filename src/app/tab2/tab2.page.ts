import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';
import { PostServiceService } from '../../../src/app/post-service.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public postServiceService: PostServiceService, public actionSheetController: ActionSheetController) { }

  async ngOnInit() {

    this.getPosts2();
    this.generarcharts();
  }
  arrayPosts: any;
  getPosts2() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServiceService.getPosts()
      .then(data => {
        this.arrayPosts = data;
      });
  }
  generarcharts() {
    const canvas = document.getElementById('mychart');
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {

        labels: [],
        datasets: [{
          label: 'Lugares de sensores',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          /*  hoverOffset: 6, */
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }, plugins: {
          title: {
            display: true,
            text: 'Sensores por lugar',
          }
        },
      },
    });

    const url = "http://192.168.1.66:5000/bitacora";
    fetch(url)
      .then(response => response.json())
      .then(datos => mostrar(datos))
      .catch(error => console.log(error))

    const mostrar = (articulos) => {
      articulos.forEach(element => {
        myChart.data['labels'].push(element.Lugar)
        myChart.data['datasets'][0].data.push(element.Id)

      });
    }


  }


}
