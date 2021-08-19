import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component'
import { Example2Component } from './components/example2/example2.component';


const routes: Routes = [
 { path: 'example',component: ExampleComponent },
 { path: 'example2',component: Example2Component }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
