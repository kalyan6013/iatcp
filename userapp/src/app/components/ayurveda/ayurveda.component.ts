import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayurveda',
  templateUrl: './ayurveda.component.html',
  styleUrls: ['./ayurveda.component.css']
})
export class AyurvedaComponent implements OnInit {

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
