import { ApiService } from './../shared/api.service';
import { StudentModel } from './student.model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  department:string[] = ['IT','CSE','EXTC','CIVIL','TEXTILE','MECHNICAL','CHEMICAL','ELECTRICAL','PRODUCTION','INSTRUMENTATION']
  filteredStatus = ''
  formValue !: FormGroup;
  studentModelObj : StudentModel = new StudentModel(); 
  studentData !: any;
  showAdd !: boolean;
  showUpdate !:boolean;
  constructor(private fb:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      name : [''],
      regNumber : [''],
      department : [''],
      company : [''],
      package : ['']
    })
    this.getAllStudent();
  }
  postStudentDetails(){
    this.studentModelObj.name = this.formValue.value.name;
    this.studentModelObj.regNumber = this.formValue.value.regNumber;
    this.studentModelObj.department = this.formValue.value.department;
    this.studentModelObj.company = this.formValue.value.company;
    this.studentModelObj.package = this.formValue.value.package;

    this.api.postStudent(this.studentModelObj)
    .subscribe((res)=>{
      console.log(res);
      alert("Student Added Successfully");
      // let reg = document.getElementById('cancel');
      // reg?.click()
      this.formValue.reset();
      this.getAllStudent();
      
    },err=>{
      alert("Something Went Wrong!")
    })
  }

  getAllStudent(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData = res;
    })
  }
  deleteStudent(row:any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      // console.log("delted",res);
      alert("Student Record Deleted");
      this.getAllStudent();
    })
 }
 clickaddStudent(){
   this.formValue.reset();
   this.showAdd = true;
   this.showUpdate = false;
 }
 onEdit(row:any){
  this.showAdd = false;
  this.showUpdate = true;
  this.studentModelObj.id = row.id;
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['regNumber'].setValue(row.regNumber);
  this.formValue.controls['department'].setValue(row.department);
  this.formValue.controls['company'].setValue(row.company);
  this.formValue.controls['package'].setValue(row.package);
 }
 updateStudent(){
  this.studentModelObj.name = this.formValue.value.name;
    this.studentModelObj.regNumber = this.formValue.value.regNumber;
    this.studentModelObj.department = this.formValue.value.department;
    this.studentModelObj.company = this.formValue.value.company;
    this.studentModelObj.package = this.formValue.value.package;

  this.api.updateStudent(this.studentModelObj,this.studentModelObj.id)
  .subscribe(res=>{
    alert("Updated Successfully")
    let reg = document.getElementById('cancel');
    reg?.click()
    this.formValue.reset();
    this.getAllStudent();
  })
 }
}
