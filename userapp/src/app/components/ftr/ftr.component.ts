import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ftr',
  templateUrl: './ftr.component.html',
  styleUrls: ['./ftr.component.css']
})
export class FtrComponent implements OnInit {
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
