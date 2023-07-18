import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { DogsRoutingModule } from './dogs-routing.module';
import { DogsContainerComponent } from './dogs-container/dogs-container.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogsService } from './providers/dogs.service';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    DogsContainerComponent,
    PictureComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    DogsService
  ]
})
export class DogsModule { }
