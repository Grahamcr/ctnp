import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu-service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.less']
})
export class MobileMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  hideMenu() {
    this.menuService.menuEmitter.next(false);
  }

}
