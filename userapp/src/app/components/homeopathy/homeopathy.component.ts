import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeopathy',
  templateUrl: './homeopathy.component.html',
  styleUrls: ['./homeopathy.component.css']
})
export class HomeopathyComponent implements OnInit {
  user={
    fname:'',
    email:'',
    phone:'',
    comment:''
   
}
  constructor() { }

  ngOnInit() {
  }
onSubmit(){
  
}
}
