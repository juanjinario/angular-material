import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, MaterialModule],
})
export class FormModule {}
