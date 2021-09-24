import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './pages/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material/material.module';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';

import { AppComponent } from './app.component';
import { reducers } from './shared/state/app.reducer';
import { environment } from '../environments/environment';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { FooterLayout } from './shared/components/footer/footer.layout';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    MaterialModule,
    BookmarksModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({serializer: CustomRouterSerializer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
