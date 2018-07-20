import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PhpService } from '../../services/php.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:any;
  user={
    fname:'',
    email:'',
    phone:'',
    hobbies:''
   
}
constructor(private phpService: PhpService,    private router: Router) { }

  ngOnInit() {
    
  }
  onEnroll(){   
    this.phpService      
    .onEnroll(this.user)     
    .subscribe(()=> this.goBack());
    console.log(this.user);
  } 
  goBack(){ 
    // this.myForm.reset();
     //this.router.navigate(['/home']);
     this.message="Mail has been sent. Please check your mail..!!";
  }
 
}
