import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
// Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavigationComponent],
  exports: [FooterComponent, HeaderComponent, NavigationComponent],
  imports: [CommonModule, MaterialModule],
})
export class LayoutModule {}
