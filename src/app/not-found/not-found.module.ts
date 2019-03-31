import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule} from './not-found.routing';
import { NotFoundComponent } from './not-found.cmpt';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: []
})

export class NotFoundModule {}
