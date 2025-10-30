import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageBuilderService } from '../services/page-builder.service';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html'
})
export class PageBuilderComponent implements OnInit {
  pageConfig: any;

  constructor(private route: ActivatedRoute, private pageBuilderService: PageBuilderService) {}

  ngOnInit() {
    const pageId = this.route.snapshot.paramMap.get('id');
    this.pageBuilderService.getPageConfig(pageId).subscribe(config => {
      this.pageConfig = config;
    });
  }

  onFormSubmit(data: any) {
    console.log('Form submitted:', data);
  }
}
