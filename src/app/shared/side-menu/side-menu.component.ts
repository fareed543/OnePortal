import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  constructor(private renderer: Renderer2, private router: Router) {}

  onMenuItemClick() {
    const htmlEl = document.documentElement;
    this.renderer.removeClass(htmlEl, 'layout-menu-expanded');
  }
}
