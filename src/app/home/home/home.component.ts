import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user = new User('', '' , '');
  public type = ['bacano' , 'taxas poker' , 'animal'];

  submitted = false;


  constructor() { }

  get diagnostic() { return JSON.stringify(this.user); }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
  }

}
