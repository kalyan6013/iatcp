import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naturopathy',
  templateUrl: './naturopathy.component.html',
  styleUrls: ['./naturopathy.component.css']
})
export class NaturopathyComponent implements OnInit {

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
