import { Component, OnInit } from '@angular/core';
import { ApiService } from './../shared/api.service';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  studentData !: any;
  extc:number=0;avgextc:number=0;cse : number = 0;avgcse:number=0;it :number = 0;avgit:number=0;electrical:number=0;avgelectrical:number=0;instru:number=0;avginstru:number=0;
  mechanical:number=0;avgmechanical:number=0;textile:number=0;avgtextile:number=0;production:number=0;avgproduction:number=0;chemical:number=0;avgchemical:number=0;civil:number=0;avgcivil:number=0;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData = res;

      for(let i of this.studentData) {
          if(i.department.toUpperCase()==='EXTC'){
            this.extc++;
            this.avgextc += Number(i.package);
          }else if(i.department.toUpperCase()==='CSE'){
            this.cse++
            this.avgcse += Number(i.package);
          }else if(i.department.toUpperCase()==='IT'){
            this.it++;
            this.avgit += Number(i.package);
          }
          else if(i.department.toUpperCase()==='CHEMICAL'){
            this.chemical++;
            this.avgchemical += Number(i.package);
          }else if(i.department.toUpperCase()==='MECHANICAL'){
            this.mechanical++;
            this.avgmechanical += Number(i.package);
          }else if(i.department.toUpperCase()==='CIVIL'){
            this.civil++;
            this.avgcivil += Number(i.package);
          }else if(i.department.toUpperCase()==='TEXTILE'){
            this.textile++;
            this.avgtextile += Number(i.package);
          }else if(i.department.toUpperCase()==='PRODUCTION'){
            this.production++;
            this.avgproduction += Number(i.package);
          }else if(i.department.toUpperCase()==='INSTRUMENTATION'){
            this.instru++;
            this.avginstru += Number(i.package);
          }else if(i.department.toUpperCase()==='ELECTRICAL'){
            this.electrical++;
            this.avgelectrical += Number(i.package);
          }
          
      }
    })
  }
  
  
  

}
