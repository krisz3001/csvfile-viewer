import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploaderComponent } from './components/uploader/uploader.component';
import { ViewerComponent } from './components/viewer/viewer.component';



const routes: Routes = [
  {
    path: 'uploader',
    component: UploaderComponent,
  },
  {
    path: 'viewer',
    component: ViewerComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
