import { Component } from '@angular/core';
import { DataComponent } from '../data/data.component';
import { AboutMeComponent } from '../further-info/about-me/about-me.component';
import { FurtherInfoComponent } from '../further-info/further-info.component';
import { IntroComponent } from '../intro/intro.component';
import { ModelsComponent } from '../models/models.component';
import { TableOfContentsComponent } from '../table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    TableOfContentsComponent,
    AboutMeComponent,
    DataComponent,
    FurtherInfoComponent,
    ModelsComponent,
    IntroComponent,
  ],
})
export class MainComponent {}
