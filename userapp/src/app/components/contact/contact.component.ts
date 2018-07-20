import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { PhpService } from '../../services/php.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private phpService: PhpService,    private router: Router) { }

  ngOnInit() {
  }
  
  user = {   
    fname: "",   
    phone: "",  
    email: "",   
    subject: "", 
    comment: "" 
    } 
    message:any;
  onSubmit(){   
    this.phpService      
    .onSubmit(this.user)     
    .subscribe(()=> this.goBack());
  } 
  goBack(){ 
    // this.myForm.reset();
     this.router.navigate(['/contact']);
     this.message="We will get back to you. Thank you..!!";
  }
}
