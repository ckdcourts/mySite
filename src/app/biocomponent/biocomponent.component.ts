import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-biocomponent',
  templateUrl: './biocomponent.component.html',
  styleUrls: ['./biocomponent.component.css']
})
export class BiocomponentComponent implements OnInit {
  public showBioMedia!: number;
  constructor(public breakpointObserver: BreakpointObserver) { }
 
  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 0px) and (max-width: 1200px) '])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showBioMedia = 1;
      }
     
    });
    this.breakpointObserver
    .observe(['(min-width: 1200px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.showBioMedia = 2;
      } 
      
    });
  }

}
