import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { FutureComponent } from './future/future.component';

@Component({
  selector: 'app-further-info',
  standalone: true,
  templateUrl: './further-info.component.html',
  styleUrl: './further-info.component.css',
  imports: [AboutMeComponent, FutureComponent],
})
export class FurtherInfoComponent {}
