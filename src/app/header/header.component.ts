import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  admin:boolean = true;
  ngOnInit(): void {
  }
  navbarCollapsed = true;
 
  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
  login(name:any,psw:any){
    if(name==="admin"&&psw==="admin"){
      this.admin = false; 
      this.router.navigate(['/dashboard'])

    }else{
      alert('Invalid Credentials')
    }
  }
}
