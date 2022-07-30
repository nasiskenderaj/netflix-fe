import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalstoreService} from "../../core/globalstore.service";
import {TvShow} from "../../auth/auth/auth/auth.component";

export class Movie {
  id!: number;
  title!: string;
  duration!: number;
  price!: number;
  description!: string;
  url!: string;
  imageUrl!: string;
  category!: {
    id: number,
    gender: string

  }
  }


@Component({
  selector: 'app-ui-grid',
  templateUrl: './ui-grid.component.html',
  styleUrls: ['./ui-grid.component.css']
})
export class UiGridComponent implements OnInit {
  movies:Movie[]=[];
  tvshows:TvShow[]=[];
username!:string;
  @Input() url!:string;
  @Input() param!:string|null;
  constructor(private http:HttpClient,private localstorage:GlobalstoreService) {
  }
//headers={name:this.param};
  ngOnInit(): void {
    this.username=this.localstorage.getItem('username')!
    // console.log('33333333333333333333333333333')
    //
    //
    // if (this.param) {
    //   this.http.get(`http://localhost:8080/${this.url}`, {headers: new HttpHeaders().set('name', this.param)}).subscribe(data => {
    //     if (Array.isArray(data))
    //     {
    //       this.tvshows = data as TvShow[];
    //   }
    //   else{
    //     this.tvshows.push(data as TvShow);
    //     }
    //   });
    // } else {
    //   this.http.get(`http://localhost:8080/${this.url}`).subscribe(data => {
    //     // console.log(data)
    //     this.movies = data as Movie[];
    //
    //   });
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('33333333333333333333333333333')


    if (this.param) {
      this.http.get(`http://localhost:8080/${this.url}`, {headers: new HttpHeaders().set('name', this.param)}).subscribe(data => {

        if (Array.isArray(data))
        {
          this.tvshows = data as TvShow[];
        }
        else{
          //clear the array so that it has no records from previous searches
          this.tvshows=[];
          this.tvshows.push(data as TvShow);
        }
      }, error => { {window.alert('there in no movie or tv show with these title')}});
    } else {
      this.http.get(`http://localhost:8080/${this.url}`).subscribe(data => {
        // console.log(data)
        this.movies = data as Movie[];

      });
    }


  }


  addtolist(id: number) {
   // this.username!=this.localstorage.getItem('username') ? this.localstorage.getItem('username') : 'jjjj';
  this.http.post(`http://localhost:8080/user/addMoviestouser/${id}`,{},{headers:{userName:this.username}}).subscribe(data=>{
    console.log('success')
  })

  }
}
