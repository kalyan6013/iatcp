import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astrology',
  templateUrl: './astrology.component.html',
  styleUrls: ['./astrology.component.css']
})
export class AstrologyComponent implements OnInit {

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
