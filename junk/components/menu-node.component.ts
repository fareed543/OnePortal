import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-node',
  templateUrl: './menu-node.component.html',
})
export class MenuNodeComponent {
  @Input() node: any;
  @Output() navigate = new EventEmitter<any>();

  toggleExpand(node: any) {
    node.expanded = !node.expanded;
  }

  navigateTo(node: any) {
    if (node.route) {
      this.navigate.emit(node);
    }
  }

  editNode(node: any) {
    console.log('Edit Node:', node);
  }

  deleteNode(node: any) {
    console.log('Delete Node:', node);
  }
}
