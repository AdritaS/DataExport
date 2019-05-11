import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ExportComponent } from './export/export.component';

@NgModule({
   declarations: [
      AppComponent,
      DemoComponent,
      NotFoundComponent,
      LandingComponent,
      ExportComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      GoogleChartsModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
