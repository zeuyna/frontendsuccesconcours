import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CremComponent } from './pages/crem/crem.component';
import { CfeepritaneComponent } from './pages/cfeepritane/cfeepritane.component';
import { EnaComponent } from './pages/ena/ena.component';
import { FasteefComponent } from './pages/fasteef/fasteef.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { TouslesconcoursComponent } from './pages/touslesconcours/touslesconcours.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch : 'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'crem',
        component:CremComponent
    },
    {
        path:'touslesconcours',
        component:TouslesconcoursComponent
    },
    {
        path:'cfeepritanee',
        component:CfeepritaneComponent
    },
    {
        path:'ena',
        component:EnaComponent
    },
    {
        path:'fasteef',
        component:FasteefComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    
    {
        path:'login',
        component:LoginComponent
    },
   
];
