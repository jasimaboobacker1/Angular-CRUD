import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit {

  Users: any ;
  
  

  constructor(private service: ServiceService,private http:HttpClient,private router:Router) {}


  edit(UserId:any){
    this.router.navigate(['detail/',UserId])
  }

 ngOnInit(): void {
   this.fetchDetails();
 }



  fetchDetails(){
    this.service.Getallusers().subscribe((res)=>{
      this.Users=res;
      console.log(this.Users);
      
    }) 
    }

    DeleteUser(UserId:any){
      this.service.Deleteuser(UserId).subscribe((res)=>{
        this.fetchDetails();
        alert('Deleted')
      })
    }

    AddUser(){
    this.router.navigate(['career'])
    }

}