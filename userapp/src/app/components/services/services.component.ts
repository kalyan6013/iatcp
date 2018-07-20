import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute, Params, Router} from '@angular/router';

// import { PhpService } from '../../services/php.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  // users:any;

  constructor(
    // private _phpService: PhpService
  ) { }

  ngOnInit() {
    // this.getServices();
    // this.getCourses();
  }

  // getServices(){
  //   this._phpService
  //   .getServices()
  //   .subscribe(users => {
  //     // console.log(users);
  //     this.users = users;
  //   })
  // }
}


