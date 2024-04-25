import { Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { AboutMeComponent } from './further-info/about-me/about-me.component';
import { FurtherInfoComponent } from './further-info/further-info.component';
import { ModelsComponent } from './models/models.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'data',
    component: DataComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'further-info',
    component: FurtherInfoComponent,
  },
  {
    path: 'models',
    component: ModelsComponent,
  },
  {
    path: 'table-of-contents',
    component: TableOfContentsComponent,
  },
];
