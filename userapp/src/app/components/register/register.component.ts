import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PhpService } from '../../services/php.service';
import {IOption} from 'ng-select';
//import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myOptions: Array<IOption> = [
    {label: 'Not Applicable', value: 'Not Applicable'},
    {label: 'North', value: 'North'},
    {label: 'East', value: 'East'},
    {label: 'West', value: 'West'},
    {label: 'South', value: 'South'},
    {label: 'Central', value: 'Central'}
];

  constructor(private phpService: PhpService, private router: Router) { }
  user = {   
    fname: "", 
    gender:"",
    dob:"",
    place:"",
    time:"",
    main:"",
    phone: "",  
    email: "",    
    address: "" ,
    city:"",
    pin:"",
    disease:"",
    year:"",
    //certificates:"",
    program:"",
    myOptions:"",
    yoga:"",
    life:"",
    rname:"",
    rphone:""
    }

  ngOnInit() {
    
  }
  onBooking_reg(){   
    this.phpService      
    .onBooking_reg(this.user)     
    .subscribe(()=> this.goBack());
    //console.log(this.user);
  } 
  goBack(){ 
    // this.myForm.reset();
    this.router.navigate(['/home']);
  }
  // uploadFile(event){
  //   let elem = event.target;
  //   if(elem.files.length > 0){
  //     console.log(elem.files[0]);
  //     let formData = new FormData();
  //     formData.append('file',elem.files[0]);

  //     this.http.post('http://localhost/php1/image.php', formData).subscribe((data) => {
  //       console.log('Got Data from back end', data);
  //     },(error) => {
  //       console.log('Error', error);
  //     });
  //   }
  //}

}
