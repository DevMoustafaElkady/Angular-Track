import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenubarModule } from 'primeng/menubar';

const primeng = [
  ButtonModule,
  InputTextModule,
  MenuModule,
  AccordionModule,
  SplitButtonModule,
  InputNumberModule,
  MenubarModule,
];

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, primeng, FormsModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
