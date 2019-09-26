import { Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from '../menu-service';
import { ModalService } from '../modal-service';
import { Redirect } from '../redirect.modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  url: string;

  constructor(private menuService: MenuService, private modalService: ModalService) {}

  ngOnInit() {

  }

  toggleModal(url: string) {
    this.url = url;
    this.modalService.modalEmitter.next(new Redirect(true, url));
  }

  scroll(el: HTMLElement) {
    let element = document.getElementById('target');
    element.scrollIntoView({behavior: 'smooth'});
    el.scrollIntoView();
  }
}
