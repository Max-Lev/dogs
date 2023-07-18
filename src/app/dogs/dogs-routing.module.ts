import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsContainerComponent } from './dogs-container/dogs-container.component';

const routes: Routes = [
  {
    path:'',component:DogsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
