import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InventionComponent } from './invention/invention.component';
import { DetailsComponent } from './details/details.component';
import { InventionsService } from './invention/inventions.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    InventionComponent,
    DetailsComponent,
    LoginComponent
    ],
  imports: [

    RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'inventions',
      pathMatch: 'full'
    },
    {
      path: 'details/:id',
      component: DetailsComponent
    },
    {
      path: 'inventions',
      component: InventionComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
    ]),
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [ InventionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
