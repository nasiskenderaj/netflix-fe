import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileSaverService} from "ngx-filesaver";
import {GlobalstoreService} from "../../../core/globalstore.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Movie} from "../../../shared/ui-grid/ui-grid.component";


export class TvShow {
  id!: number;
  title!: string;
  duration!: number;
  price!: number;
  description!: string;
  url!: string;
  imageUrl!: string;
  noOfEpisodes!:number;
}

export class Role {
}

export class UserDto{
  id!:number;
   name!:string;
   surname!:string;
   age!:number;
    password!:string;
   email!:string;
   movieList!:Movie[];
    tvShowsList!:TvShow[];
   roles!:Role[];
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  showDialog=false;

signInFormGroup!:FormGroup;
  constructor(private http: HttpClient,
              private localstorage:GlobalstoreService,
              private router:Router,
              private formbuilder:FormBuilder){

  }


  ngOnInit() {
    this.signInFormGroup=this.formbuilder.group(
      {
     username:[null,[Validators.required]] ,
     password:[null,Validators.required] ,
      }
    )
  }
  login() {
    this.showDialog=false;
    this.http.post("http://localhost:8080/user/login",{name:this.signInFormGroup.get('username')?.value,password:this.signInFormGroup.get('password')?.value},{headers:{ Authorization: `Basic ${{Username:"Denis",Password:'denis12345'}}`}}).
    subscribe(value => {

      let user;
      if (value) {
        user = value as UserDto;
        this.localstorage.removeItem('username');
        this.localstorage.removeItem('userid');
        this.localstorage.setItem('username',user.name);
        this.localstorage.setItem('userid',user.id.toString());
        this.router.navigate(['list']);
      } else {
        this.showDialog = true;
      }
    });

  }
}
