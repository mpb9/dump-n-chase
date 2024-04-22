import { Component } from '@angular/core';
import { TableOfContentsComponent } from '../table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [TableOfContentsComponent],
})
export class MainComponent {}
