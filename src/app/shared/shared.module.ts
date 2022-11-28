import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { OptionComponent } from './components/option/option.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, OptionComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    OptionComponent,
    RouterModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
