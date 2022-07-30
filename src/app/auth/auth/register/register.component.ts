import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalstoreService} from "../../../core/globalstore.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  date?: Date;
userFormGroup:FormGroup;
 // showDialog=false;
  //deactivate=false;
  constructor(private fb:FormBuilder,
              private router:Router,
              private activatedRoute:ActivatedRoute,
              private localstorage:GlobalstoreService,
              private http:HttpClient) {
    this.userFormGroup=this.fb.group(
      {
        name:['',Validators.required],
        surname:['',Validators.required],
        age:[0,[Validators.min(0),Validators.max(100)]],
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
    //const register={name:this.userFormGroup.get('firstName'),surname:this.userFormGroup.get('lastName')?.value,age:1,password:this.userFormGroup.get('password')?.value,email:this.userFormGroup.get('email')?.value};
    this.http.post('http://localhost:8080/user/register',this.userFormGroup.getRawValue()).subscribe(value => {
      this.router.navigate(['../'])
    })

// this.localstorage.setItem('user',this.userFormGroup.get('password')?.value);
// this.localstorage.setItem('email',this.userFormGroup.get('email')?.value);
//       this.router.navigate(['../'], {queryParams: {deactivate: true}})

  }

}
