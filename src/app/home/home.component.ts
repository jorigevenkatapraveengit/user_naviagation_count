import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

  }
  tab1Click() {
    this.router.navigate(['tab1'] , {
      relativeTo : this.activatedRoute
    })
  }
  tab2Click() {
    this.router.navigate(['tab2'], {
      relativeTo : this.activatedRoute
    })
  }
  tab3Click() {
    this.router.navigate(['tab3'], {
      relativeTo : this.activatedRoute
    })
  }
}
