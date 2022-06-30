import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(name:any,psw:any){
    if(name==="admin"&&psw==="admin"){
      this.router.navigate(['#dashboard'])
    }else{
      alert('Invalid Credentials')
    }
  
     
    
  }

}
