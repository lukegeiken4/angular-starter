import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: '**',
        loadChildren: './not-found/not-found.module#NotFoundModule'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
