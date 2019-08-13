import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank/blank.component';
import { ClientFullComponent } from './client-full/client-full.component';
import { AdminFullComponent } from './admin-full/admin-full.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BlankComponent, ClientFullComponent, AdminFullComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
