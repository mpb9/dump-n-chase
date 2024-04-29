import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [],
  templateUrl: './table-of-contents.component.html',
  styleUrl: './table-of-contents.component.css',
})
export class TableOfContentsComponent {
  scrollToElement(arg0: string) {
    let element = document.getElementById(arg0);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(private router: Router) {}
}
