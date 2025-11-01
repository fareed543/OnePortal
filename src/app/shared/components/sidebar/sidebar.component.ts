import { Component, Renderer2 } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
})
export class SidebarComponent {


  constructor(private renderer: Renderer2, private router: Router) {}

  onMenuItemClick() { // route: string
    // Navigate to the selected route
    // this.router.navigateByUrl(route);

    // Collapse the sidebar menu
    const htmlEl = document.documentElement;
    this.renderer.removeClass(htmlEl, 'layout-menu-expanded');
  }
}
