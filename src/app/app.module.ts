import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';

// @NgModule({
//   imports: [
//     BrowserModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     ReactiveFormsModule,
//     RouterModule.forRoot([
//       { path: '', component: ProductListComponent },
//     ])
//   ],
//   declarations: [
//     AppComponent,
//     TopBarComponent,
//     ProductListComponent
//   ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule { }
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
