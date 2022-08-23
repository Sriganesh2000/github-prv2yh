import { NgModule } from '@angular/core';
import { DetailsRoutingModule } from './details.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { DetailsComponent } from './details.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    ReactiveFormsModule,
    DetailsRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,

    MatFormFieldModule,
  ],
})
export class ProductDetailsModule {}
