import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  isAdmin:boolean=false;
searchcontrol!:FormGroup;
  constructor(private formbuilder:FormBuilder,
              private route:Router) { }

  ngOnInit(): void {
    this.searchcontrol=this.formbuilder.group(
      {
        search: ['']
      }
    )
  }

  searchMovie() {
    this.route.navigate([`../tvshows/${this.searchcontrol.get('search')?.value}`])
  }

  getActionMovies() {
    this.route.navigate(['../moviesByCategory'])
  }
}
