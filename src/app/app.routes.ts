import { Routes } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent }, // Assuming you meant to use HeaderComponent here
];
