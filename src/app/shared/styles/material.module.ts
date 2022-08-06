import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCommonModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSliderModule,
    MatDividerModule
  ]
})
export class MaterialModule { }