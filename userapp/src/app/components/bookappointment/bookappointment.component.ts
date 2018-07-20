import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PhpService } from '../../services/php.service';
import {IOption} from 'ng-select';



@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  myOptions: Array<IOption> = [
    {label: 'Yoga Classes', value: 'Yoga Classes'},
    {label: 'Power Yoga', value: 'Power Yoga'},
    {label: 'Ayurveda', value: 'Ayurveda'},
    {label: 'Astrology', value: 'Astrology'},
    {label: 'Acupressure & Acupuncture', value: 'Acupressure & Acupuncture'},
    {label: 'Naturopathy', value: 'Naturopathy'},
    {label: 'Homeopathy', value: 'Homeopathy'},
    {label: 'Reiki & Pranic Healing', value: 'Reiki & Pranic Healing'},
    {label: 'Spa Services', value: 'Spa Services'},
    {label: 'FTR & NLP', value: 'FTR & NLP'}
];

  constructor(private phpService: PhpService,    private router: Router) { }

  user = {   
    fname: "",   
    phone: "",  
    email: "",    
    comment: "" ,
    // service:"",
    startdate:"",
    enddate:"",
    myOptions:""
    }
  ngOnInit() {
  }

  onBooking(){   
    this.phpService      
    .onBooking(this.user)     
    .subscribe(()=> this.goBack());
  } 
  goBack(){ 
    // this.myForm.reset();
    this.router.navigate(['/home']);
     
  }

}
