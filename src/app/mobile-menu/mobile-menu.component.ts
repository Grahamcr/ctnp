import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu-service';
import { ModalService } from '../modal-service';
import { Redirect } from '../redirect.modal';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.less']
})
export class MobileMenuComponent implements OnInit {

  constructor(private menuService: MenuService, private modalService: ModalService) { }

  ngOnInit() {
  }

  hideMenu() {
    this.menuService.menuEmitter.next(false);
  }
  showModal() {
    this.modalService.modalEmitter.next(new Redirect(true, 'https://www.google.com'));
  }

}
