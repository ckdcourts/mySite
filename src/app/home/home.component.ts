import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'not just asana';

  @HostBinding("class.drawer-open")
  isDrawerOpen: boolean = false;
  
  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }
 

  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }

}
