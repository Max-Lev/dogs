import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsContainerComponent } from './dogs-container/dogs-container.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogsService } from './providers/dogs.service';
@NgModule({
  declarations: [
    DogsContainerComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    DogsService
  ]
})
export class DogsModule { }
