import { Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from './menu-service';
import { ModalService } from './modal-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  showMenu = false;
  showModal = false;
  private menuSub: Subscription;
  private modalSub: Subscription;

  constructor(private menuService: MenuService, private modalService: ModalService) {}

  ngOnInit() {
    this.menuSub = this.menuService.menuEmitter.subscribe(value => {
      this.showMenu = value;
    });

    this.modalSub = this.modalService.modalEmitter.subscribe(value => {
      this.showModal = value;
    });
  }
  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
    this.modalSub.unsubscribe();
  }
  toggleResponsiveMenu() {
    return !this.showMenu;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
