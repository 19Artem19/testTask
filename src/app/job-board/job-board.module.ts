import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { SharedModule } from '../shared/shared.module';

import { COMPONENTS } from './components';
import { JobBoardRoutingModule } from './job-board-routing.module';

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    JobBoardRoutingModule,
    AngularSvgIconModule,
    SharedModule,
  ],
})
export class JobBoardModule {}