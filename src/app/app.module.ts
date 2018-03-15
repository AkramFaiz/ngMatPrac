import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { FormsModule } from '@angular/forms';
import { GeoLocationService } from './geo-location.service';
import { DataService } from './data.service';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule,Routes} from '@angular/router';

import 'hammerjs';
import { ListComponent } from './list/list.component';
import { TeaComponent } from './tea/tea.component';
import { HeaderComponent } from './header/header.component';
import { CheckComponent } from './check/check.component';

const appRoutes:Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'tea',
    component: TeaComponent
  },
  {
    path: 'tea/:id',
    component: TeaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TeaComponent,
    HeaderComponent,
    CheckComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule, 
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule, 
    MatCardModule,
    MatCheckboxModule, 
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [GeoLocationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
