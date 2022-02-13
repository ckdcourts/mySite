import { Component, Input,  OnInit, } from '@angular/core';

import { WordComponent } from './word.component';
import { BreakpointObserver , BreakpointState } from '@angular/cdk/layout';


@Component({

  template: `<div class="word-list"  >
  <p [ngClass]="showWordList === 1 ? 'show-mobile-word' : 'hidden'" [style] = "{'font-size' : '3rem'}"> {{data}} </p>
  <p [ngClass]="showWordList === 2 ? 'show-desktop-word' : 'hidden'" [style] = "{'font-size' : '6rem'}"> {{data}} </p>
  </div>
  `
})
export class WordListComponent implements WordComponent {
  @Input() data: any;
  public showWordList!: number;





constructor(
  public breakpointObserver: BreakpointObserver
) {}


 ngOnInit() : void {
  this.breakpointObserver
  .observe(['(min-width: 0px) and (max-width: 767px) '])
  .subscribe((state: BreakpointState) => {
    if (state.matches) {
      this.showWordList = 1;
    }
   
  });
  this.breakpointObserver
  .observe(['(min-width: 768px) and (max-width: 1920px)'])
  .subscribe((state: BreakpointState) => {
    if (state.matches) {
      this.showWordList = 2;
    } 
    
  });
 
 }
}