import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent, SchoolComponent, ToysComponent } from './index';

@NgModule({
  declarations: [FoodComponent, SchoolComponent, ToysComponent],
  imports: [CommonModule],
  exports: [],
})
export class ChildrensProductsModule {}
