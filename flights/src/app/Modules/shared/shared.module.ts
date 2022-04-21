import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';

const primeng = [
  ButtonModule,
  InputTextModule,
  MenuModule,
  AccordionModule,
  SplitButtonModule,
  InputNumberModule,
  MenubarModule,
  DropdownModule,
];

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, primeng, FormsModule, BrowserAnimationsModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
