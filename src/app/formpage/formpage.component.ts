import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {
  public showFormMedia!: number;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 0px) and (max-width: 1200px) '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showFormMedia = 1;
      }
     
    });
    this.breakpointObserver
    .observe(['(min-width: 1200px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showFormMedia = 2;
      } 
      
    });
  }

}
