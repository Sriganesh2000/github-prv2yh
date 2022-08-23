import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'products',
    component: ProductsComponent,
  },
  {
    path:'details',
    component: DetailsComponent,
  },
  {
    path:'product/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent=[ProductsComponent,DetailsComponent];
