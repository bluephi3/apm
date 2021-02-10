import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarComponent} from "./star.component";
import {FormsModule} from "@angular/forms";
import {ConvertToSpacesPipe} from "./ConvertToSpaces.pipe";

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
