import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


export const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
//   { path: 'novice', component: NoviceComponent },
//   { path: 'najemi-nas', component: NajemiNasComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: '/about-us', pathMatch: 'full' }, // privzeta stran
  { path: '**', redirectTo: 'contact-us' } // če je napačna pot
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
