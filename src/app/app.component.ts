import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatInput,MatLabel,MatFormField} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { animateForLoginSignup } from './animation'
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatInput,MatLabel,MatFormField,MatButtonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    animateForLoginSignup
  ]
})
export class AppComponent implements OnInit{
  toggleRegister:boolean=true;
  logindeatails!:FormGroup;
  registerDetails!:FormGroup

  constructor(private formbuilder:FormBuilder){}
  ngOnInit(): void {
     this.getLoginDeatils();
     this.getRegisterDetails();
  }
  getLoginDeatils(){
    this.logindeatails=this.formbuilder.group({
      Username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }
  getRegisterDetails(){
    this.registerDetails=this.formbuilder.group({
      personalInfo:this.formbuilder.group({
        userName: ['',[Validators.required]],
        passWord: ['',[Validators.required]],
        confirmPassword:['',[Validators.required]]
      }),
      Kyc:this.formbuilder.group({
        panDetails:[''],
        adharDetails:['']
      })

    })
  }
  change(e:any,bool:boolean){
    this.toggleRegister=bool;
  }
}
