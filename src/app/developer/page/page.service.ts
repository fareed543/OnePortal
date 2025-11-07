import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageItem } from './page-item.model';

@Injectable({ providedIn: 'root' })
export class PageService {
  private pages = new BehaviorSubject<PageItem[]>([
    {
      id: 1,
      title: 'Home',
      heading: 'Welcome to Home',
      subHeading: 'Subheading for Home',
      description: 'Home page content',
      shortDescription: 'Short home intro',
      image: '',
      tags: ['home'],
      parentId: null,
      children: [],
      open: false
    }
  ]);

  getPages(): Observable<PageItem[]> {
    return this.pages.asObservable();
  }

  savePage(updatedPage: PageItem): void {
    const allPages = this.pages.getValue();
    this.updatePageInTree(allPages, updatedPage);
    this.pages.next(allPages);
  }
updatePageInTree(list: PageItem[], updated: PageItem): boolean {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === updated.id) {
      list[i] = updated;
      return true;
    }

    const children = list[i].children;
    if (children && children.length > 0) {
      if (this.updatePageInTree(children, updated)) {  // ✅ TS now knows children is PageItem[]
        return true;
      }
    }
  }
  return false;
}


}
