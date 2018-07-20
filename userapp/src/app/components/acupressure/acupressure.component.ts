import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acupressure',
  templateUrl: './acupressure.component.html',
  styleUrls: ['./acupressure.component.css']
})
export class AcupressureComponent implements OnInit {

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
