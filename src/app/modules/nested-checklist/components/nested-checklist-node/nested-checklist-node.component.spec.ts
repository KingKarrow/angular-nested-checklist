import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChecklistNodeComponent } from './nested-checklist-node.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NestedChecklistNode } from '../../models/nested-checklist-node';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

describe('NestedChecklistNodeComponent', () => {
  let component: NestedChecklistNodeComponent;
  let fixture: ComponentFixture<NestedChecklistNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChecklistNodeComponent ],
      imports: [ MatCheckboxModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedChecklistNodeComponent);
    component = fixture.componentInstance;
    component.node = new NestedChecklistNode('test', false);
    const formArray = new FormArray<FormControl<boolean>>([]);
    const formGroup = new FormGroup({ items: formArray });
    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
