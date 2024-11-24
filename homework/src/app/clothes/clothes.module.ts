import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  KidsComponent,
  MenComponent,
  WomenComponent,
  SweatersComponent,
  DressesComponent,
  JeansComponent,
} from './index';
import { ShirtsComponent } from './men/shirts/shirts.component';

@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    KidsComponent,
    JeansComponent,
    DressesComponent,
    SweatersComponent,
    ShirtsComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ClothesModule {}
