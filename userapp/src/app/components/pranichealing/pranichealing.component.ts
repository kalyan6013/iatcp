import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pranichealing',
  templateUrl: './pranichealing.component.html',
  styleUrls: ['./pranichealing.component.css']
})
export class PranichealingComponent implements OnInit {
  user = {   
    fname: "",   
    phone: "",  
    email: "",   
    comment: "",
    startdate:"",
    enddate:""
    }
  constructor() { }

  ngOnInit() {
  }

}
