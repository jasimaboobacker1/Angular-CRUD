import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CareerComponent } from '../career/career.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailComponent } from '../detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
      },
      {
        path:'career',
        component:CareerComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      {
        path:'detail/:id',
        component:DetailComponent
      }
];
