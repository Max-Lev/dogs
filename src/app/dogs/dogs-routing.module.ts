import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsContainerComponent } from './dogs-container/dogs-container.component';
import { dogsListResolver } from './providers/dogs-list.resolver';

const routes: Routes = [
  {
    path:'',component:DogsContainerComponent,
    resolve:{
      dogsListResolver:dogsListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
