import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yogaclasses',
  templateUrl: './yogaclasses.component.html',
  styleUrls: ['./yogaclasses.component.css']
})
export class YogaclassesComponent implements OnInit {

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
onSubmit(){
  
}
}
