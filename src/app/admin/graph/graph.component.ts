import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { ApiService } from './../shared/api.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  studentData !: any;
  chart : any = []
  first:number=0;second:number=0;third:number=0;fourth:number=0;
  fifth:number=0;sixth:number=0;seventh:number=0;
  constructor(private api:ApiService) {}
    

  ngOnInit(): void {
    //  this.getData();
   this.api.getStudent().subscribe(res=>{
      this.studentData = res;
      for(let i of this.studentData){
          // console.log( typeof Number(i.package));
          // console.log(typeof (i.package));
          if(Number(i.package) >0 && Number(i.package)<=2){
              console.log((i));
              this.first++;
              console.log(this.first);
          }else if(Number(i.package) > 2 && Number(i.package)<=4){
              this.second++;
          }else if(Number(i.package) > 4 && Number(i.package)<=6){
              this.third++;
          }else if(Number(i.package) > 6 && Number(i.package)<=8){
              this.fourth++;
          }else if(Number(i.package) > 8 && Number(i.package)<=10){
            this.fifth++;
        }else if(Number(i.package) > 10 && Number(i.package)<=13){
            this.sixth++;
        }else if(Number(i.package) > 14){
            this.seventh++;
        }
          
      }
      //charts
      this.chart = new Chart('canvas',{
          type : 'bar',
          data: {
            labels: ['0 - 2(LPA)', '<2 - 4(LPA)', '<4 - 6(LPA)', '<6 - 8(LPA)', '<8 - 10(LPA)','<10 - 13(LPA)','14+(LPA)'],
            datasets: [{
                label: 'Number of Students Placed',
                data: [this.first,this.second,this.third,this.fourth,this.fifth,this.sixth,this.seventh],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
      })
  })
  }
}
 
