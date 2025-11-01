import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
isMenuExpanded = false;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
  const htmlEl = document.documentElement;
  const isExpanded = htmlEl.classList.contains('layout-menu-expanded');

  if (isExpanded) {
    // collapse
    this.renderer.removeClass(htmlEl, 'layout-menu-expanded');
  } else {
    // expand
    this.renderer.addClass(htmlEl, 'layout-menu-expanded');
  }

  this.isMenuExpanded = !isExpanded; // keep in sync
}

}
