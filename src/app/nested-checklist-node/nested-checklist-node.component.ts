import { Component, Input } from '@angular/core';
import { INestedChecklistNode } from '../nested-checklist-node';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: '[nested-checklist-node]',
  templateUrl: './nested-checklist-node.component.html',
  styleUrls: ['./nested-checklist-node.component.scss']
})
export class NestedChecklistNodeComponent {
  @Input() node: INestedChecklistNode;
  @Input() formGroup = {} as FormGroup;

  constructor() {
  }

  get formArray() {
    return this.formGroup.get('items') as FormArray;
  }

  get index() {
    return this.node.index || 0;
  }

  get control() {
    return this.formArray.at(this.index) as FormControl<boolean>;
  }

  get children() {
    return this.node.children || [];
  }
}
