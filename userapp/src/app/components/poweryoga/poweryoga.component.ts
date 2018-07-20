import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poweryoga',
  templateUrl: './poweryoga.component.html',
  styleUrls: ['./poweryoga.component.css']
})
export class PoweryogaComponent implements OnInit {

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
