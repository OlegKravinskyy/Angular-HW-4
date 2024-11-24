import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MenComponent,
  WomenComponent,
  KidsComponent,
  JeansComponent,
  DressesComponent,
  SweatersComponent,
} from './clothes';
import {
  FoodComponent,
  SchoolComponent,
  ToysComponent,
} from './childrens-products';

const routes: Routes = [
  { path: 'men', component: MenComponent },
  {
    path: 'women',
    component: WomenComponent,
    children: [
      { path: 'dresses', component: DressesComponent },
      { path: 'jeans', component: JeansComponent },
      { path: 'sweaters', component: SweatersComponent },
    ],
  },
  { path: 'kids', component: KidsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'toys', component: ToysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
