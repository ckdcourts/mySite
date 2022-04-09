import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
} from '@angular/core';

import { WordDirective } from './word.directive';
import { WordItem } from './word-item';
import { WordComponent } from './word.component';

@Component({
  selector: 'app-word-banner',
  styleUrls: ['.././wordcycle/word-banner.component.css'],
  template: `
  
    <div class="word-banner">
      <ng-template [word-host] ></ng-template>
    </div>
  
  `,
})
export class WordBannerComponent implements OnInit, OnDestroy {
  @Input() words: WordItem[];
  currentWordIndex = -1;
  @ViewChild(WordDirective) wordHost: WordDirective;
  interval: any;


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    
    ) {}

  ngOnInit(): void {
    this.loadComponent();
    this.getWords();




   
}
  

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;

    let wordItem = this.words[this.currentWordIndex];
  

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      wordItem.component
    );

    let viewContainerRef = this?.wordHost?.viewContainerRef;

    if (viewContainerRef) {
      viewContainerRef?.clear();

      let componentRef = viewContainerRef?.createComponent(componentFactory);
      (<WordComponent>componentRef?.instance).data = wordItem.data.word;
    }
  }

  getWords() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

