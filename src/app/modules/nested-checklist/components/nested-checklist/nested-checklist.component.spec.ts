import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { NestedChecklistComponent } from './nested-checklist.component';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { mockChecklist, mockChecklistComplex, mockChecklistComplexTrue } from 'src/app/mock';
import { NestedChecklistNodeComponent } from '../nested-checklist-node/nested-checklist-node.component';

describe('NestedChecklistComponent', () => {
  let component: NestedChecklistComponent;
  let fixture: ComponentFixture<NestedChecklistComponent>;
  let mockMatCheckbox: jasmine.SpyObj<MatCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChecklistComponent, NestedChecklistNodeComponent ],
      imports: [ FormsModule, ReactiveFormsModule, MatCheckboxModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedChecklistComponent);
    component = fixture.componentInstance;
    // component = new NestedChecklistComponent(new FormBuilder());
    
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Using SIMPLE checklist', () => {
    beforeEach(async () => {
      component.config = of(mockChecklist);
      fixture.detectChanges();
    });

    it('should populate checklistData and formArray', (done) => {
      component.config.subscribe(() => {
        expect(component.checklistData).toEqual(mockChecklist);
        expect(component.formArray.length).toBe(1);
        done();
      });
    });
  
    it('should update node.checked on control change', (done) => {
      component.config.subscribe(() => {
        const control = component.formArray.at(0);
        control.valueChanges.subscribe(() => {
          expect(component.checklistData[0].checked).toBe(true);
          done();
        });
        control.setValue(true);
      });
    });
  });

  describe('Using COMPLEX checklist', () => {
    beforeEach(async () => {
      component.config = of(mockChecklistComplex);
      fixture.detectChanges();
    });

    it('should populate COMPLEX checklistData and formArray', (done) => {
      component.config.subscribe(() => {
        expect(component.checklistData).toEqual(mockChecklistComplex);
        expect(component.formArray.length).toBe(13);
        done();
      });
    });

    it('should uncheck all parents if a child is unchecked', (done) => {
      component.config = of(mockChecklistComplexTrue);
      fixture.detectChanges();
      component.config.subscribe(() => {
        const control = component.formArray.at(4);
        control.valueChanges.subscribe(() => {
          expect(component.checklistFlat[4].checked).toBe(false);
          expect(component.checklistFlat[2].checked).toBe(false);
          expect(component.checklistFlat[1].checked).toBe(false);
          expect(component.checklistFlat[0].checked).toBe(false);
          done();
        });
        control.setValue(false);
      });
    });

    it('should check parent if all children checked', (done) => {
      component.config.subscribe(() => {
        const child1Control = component.formArray.at(3);
        const child2Control = component.formArray.at(4);
        const child3Control = component.formArray.at(5);
        child3Control.valueChanges.subscribe(() => {
          expect(component.checklistFlat[2].checked).toBe(true);
          expect(component.checklistFlat[1].checked).toBe(false);
          expect(component.checklistFlat[0].checked).toBe(false);
          done();
        });
        child1Control.setValue(true);
        child2Control.setValue(true);
        child3Control.setValue(true);
      });
    });
  });
});
