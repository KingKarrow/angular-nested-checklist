import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NestedChecklistComponent } from './components/nested-checklist/nested-checklist.component';
import { NestedChecklistNodeComponent } from './components/nested-checklist-node/nested-checklist-node.component';

@NgModule({
  declarations: [
    NestedChecklistComponent,
    NestedChecklistNodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    NestedChecklistComponent
  ]
})
export class MatNestedChecklistModule { }
