import { Component } from '@angular/core';
import { PageBuilderService } from '../services/page-builder.service';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html'
})
export class PageBuilderComponent {
  pageConfig: any = {
    title: 'New Page',
    sections: []
  };

  constructor(private pageService: PageBuilderService) {}

  addSection() {
    this.pageConfig.sections.push({ type: 'form', title: 'New Section' });
  }

  removeSection(index: number) {
    this.pageConfig.sections.splice(index, 1);
  }

  editSection(section: any) {
    // open form builder or table builder modal based on section.type
  }

  savePage() {
    this.pageService.savePageConfig(this.pageConfig).subscribe(() => {
      alert('Page configuration saved!');
    });
  }
}
