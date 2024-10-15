import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent implements OnInit{

  form!:FormGroup;
  formSubmitted = false;

  


  constructor(private http:HttpClient,private Apiservice:ServiceService,private _fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this._fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      place: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  Add(){
    this.formSubmitted = true;
    if (this.form.valid) {
      const formValue = this.form.value;
      this.Apiservice.AddUser(formValue).subscribe((res)=>{
        alert('User added');
        this.form.reset(); 
      })
      
    }
  }
  

  

}
