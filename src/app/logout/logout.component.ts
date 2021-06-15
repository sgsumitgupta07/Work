import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private router:Router , private trans:TransferService ) { }

  ngOnInit(): void {
    localStorage.removeItem("uid");
    localStorage.removeItem("uname");

    this.trans.transferLoginDetails({status:false});

    this.router.navigate(['/loginformpage'])
  }

}
