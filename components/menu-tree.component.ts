import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
})
export class MenuTreeComponent {
  @Input() menu: any[] = [];

  constructor(private router: Router) {}

  toggleExpand(node: any) {
    node.expanded = !node.expanded;
  }

  navigateTo(node: any) {
    if (node.route) {
      this.router.navigate([node.route]);
    }
  }

  editNode(node: any) {
    console.log('Edit Node:', node);
    // You can open a dialog to rename or change route
  }

  deleteNode(node: any) {
    console.log('Delete Node:', node);
    // Implement recursive delete logic
  }
}
