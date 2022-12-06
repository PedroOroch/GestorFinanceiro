import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancasComponent } from './views/financas/financas.component';


const routes: Routes = [
  {
    path: 'financas', component: FinancasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
