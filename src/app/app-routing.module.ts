import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modules
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
//components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  //path '/dashboard' PagesRoutingModule
  //path '/auth' AuthRoutingModule
  //path '/' PagesRoutingModule
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', component: NopagefoundComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
