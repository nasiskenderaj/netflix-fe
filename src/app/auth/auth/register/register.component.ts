import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalstoreService} from "../../../core/globalstore.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date?: Date;
userFormGroup:FormGroup;
  showDialog=false;
  deactivate=false;
  constructor(private fb:FormBuilder,private router:Router, private activatedRoute:ActivatedRoute,private localstorage:GlobalstoreService) {
    this.userFormGroup=this.fb.group(
      {
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        age:[null,Validators.required],
        email:['', [Validators.required,Validators.email]],
        password:[null,[Validators.required, Validators.min(4),Validators.max(16)]]
      }
    )

  }



  ngOnInit(): void {

  }

  reset() {
    this.userFormGroup.reset();
  }

  onclick() {

this.localstorage.setItem('user',this.userFormGroup.get('password')?.value);
this.localstorage.setItem('email',this.userFormGroup.get('email')?.value);
      this.router.navigate(['../'], {queryParams: {deactivate: true}})

  }
}
