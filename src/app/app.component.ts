import { Component, ViewEncapsulation, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from './menu-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  showMenu = false;
  private menuSub: Subscription;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuSub = this.menuService.menuEmitter.subscribe(value => {
      this.showMenu = value;
    });
  }
  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }
  toggleResponsiveMenu() {
    return !this.showMenu;
  }
}
