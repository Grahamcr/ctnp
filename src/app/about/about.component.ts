import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  scroll(el: HTMLElement) {
    let element = document.getElementById('target');
    element.scrollIntoView({behavior: 'smooth'});
    el.scrollIntoView();
  }

}
