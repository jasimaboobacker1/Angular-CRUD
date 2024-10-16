import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  TaskId:any;
  UserDetail:any;

  constructor(private route: ActivatedRoute , private service:ServiceService) {}

  ngOnInit(): void {
    this.TaskId = +(this.route.snapshot.paramMap.get('id') ?? '0');
    console.log(this.TaskId);

  this.service.GetUser(this.TaskId).subscribe((res)=>{
     this.UserDetail=res;
     console.log(this.UserDetail);
     
    })


   
    
  }
  


}
