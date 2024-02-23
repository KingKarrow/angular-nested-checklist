import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { INestedChecklistNode } from '../nested-checklist-node';
import { Observable } from 'rxjs';

@Component({
  selector: 'nested-checklist',
  templateUrl: './nested-checklist.component.html',
  styleUrls: ['./nested-checklist.component.scss']
})
export class NestedChecklistComponent implements OnInit {
  @Input() config: Observable<INestedChecklistNode[]>;

  form: FormGroup<{ items: FormArray<FormControl<boolean>> }>;
  checklistData: INestedChecklistNode[] = [];
  checklistFlat: INestedChecklistNode[] = [];
  storageList: boolean[] = [];

  constructor(private _formBuilder: FormBuilder) {
    const localChecklist = localStorage.getItem('checklist');
    if (localChecklist != null) {
      this.storageList = localChecklist
        .split(',')
        .map(item => item === '1' ? true : false);
    }

    this.form = this._formBuilder.group({
      items: new FormArray<FormControl<boolean>>([])
    });
  }

  ngOnInit(): void {
    this.config.subscribe(ob => {
      const newData: INestedChecklistNode[] = Array.isArray(ob) ? ob as INestedChecklistNode[] : [];
      this.populateChecklist(newData);
    });
  }

  get formArray() {
    return this.form.get('items') as FormArray<FormControl<boolean>>;
  }

  getControlAtIndex(index: number): FormControl<boolean> {
    return this.formArray.at(index) as FormControl<boolean>;
  }

  populateChecklist(data: INestedChecklistNode[]) {
    this.checklistData = data;

    for (let i = 0; i < this.checklistData.length; i++) {
      this.addCheckbox(this.checklistData[i]);
    }

    this.form.valueChanges.subscribe(formValues => this.onFormChange(formValues));
  }

  addCheckbox(node: INestedChecklistNode, parentIndex?: number) {
    node.index = this.formArray.length;
    if (this.storageList[node.index] === undefined) this.storageList[node.index] = false;
    node.checked = this.storageList[node.index];
    if (parentIndex !== undefined) node.parent = parentIndex;

    const control = new FormControl(node.checked) as FormControl<boolean>;
    control.valueChanges.subscribe(val => this.onControlChange(node, val));
    this.formArray.push(control);
    this.checklistFlat.push(node);

    if (node.children && node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        this.addCheckbox(node.children[i], node.index);
      }
    }
  }

  onControlChange(node: INestedChecklistNode, toValue: boolean) {
    console.log('Control changed', node.name);
    node.checked = toValue;

    this.updateChildrenOf(node);
    this.updateParentsOf(node);
  }

  onFormChange(formValues: Partial<{ items: boolean[] }>) {
    const items = formValues.items;
    if (items !== undefined) {
      const storeList = items.map(val => {
        return val ? 1 : 0;
      }).join(',');
      localStorage.setItem('checklist', storeList);
      this.storageList = items;
    }
  }

  updateChildrenOf(node: INestedChecklistNode) {
    if (node.children !== undefined) {
      for (let i = 0; i < node.children.length; i++) {
        const childNode = node.children[i];
        if (childNode.index !== undefined) {
          let childControl = this.getControlAtIndex(childNode.index);
          if (childControl && childControl.value !== node.checked) {
            childControl.setValue(node.checked, { emitEvent: false });
            childNode.checked = node.checked;
          }
          this.updateChildrenOf(childNode);
        }
      }
    }
  }

  updateParentsOf(node: INestedChecklistNode) {
    if (node.checked) {
      this.forEachNodeParent(node, (parent, child) => {
        if (parent.children !== undefined && parent.index !== undefined) {
          const everyChildChecked = parent.children.every(child => child.checked);
          this.getControlAtIndex(parent.index).setValue(everyChildChecked, { emitEvent: false });
          parent.checked = everyChildChecked;
        }
      });
    } else {
      this.forEachNodeParent(node, (parent, child) => {
        if (parent.index === undefined) return;
        this.getControlAtIndex(parent.index).setValue(false, { emitEvent: false });
        parent.checked = false;
      });
    }
  }

  forEachNodeParent(node: INestedChecklistNode, callback: (parent: INestedChecklistNode, node: INestedChecklistNode) => void) {
    let currentNode = node;
    while (currentNode.parent !== undefined) {
      const parentNode = this.checklistFlat[currentNode.parent];
      callback(parentNode, currentNode);
      currentNode = parentNode;
    }
  }
}
