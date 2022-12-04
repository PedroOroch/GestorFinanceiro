import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancasComponent } from './views/financas/financas.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsuarioComponent } from './views/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    FinancasComponent,
    SobreComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
