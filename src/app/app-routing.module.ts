import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';


export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'demo', component: DemoComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}
