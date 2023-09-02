import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [LandingComponent],
  declarations: [LandingComponent],
})
export class TestModule {}
