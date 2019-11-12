import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu-service';
import { ModalService } from '../modal-service';
import { Redirect } from '../redirect.modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService, private modalService: ModalService) { }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.menuEmitter.next(true);
  }

  showModal() {
    this.modalService.modalEmitter.next(new Redirect(true, 'https://shop.spreadshirt.com/change-the-narrative-project/'));
  }
}
