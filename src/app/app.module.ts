import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowComponent } from './show/show.component';
import { IndexComponent } from './index/index.component';
import { BlogService } from './shared/blog.service';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DataStorageService } from './shared/data-storage.service';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ReversePipe } from './shared/reverse.pipe';
import { firebaseConfig } from './auth/firebase.credentials';





const appRoutes: Routes = [
  {path: 'new', component: NewComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: ':id', component: ShowComponent},
  
];



firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowComponent,
    IndexComponent,
    NewComponent,
    EditComponent,
    SigninComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
    
    
  ],
  providers: [BlogService, HttpClient, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
