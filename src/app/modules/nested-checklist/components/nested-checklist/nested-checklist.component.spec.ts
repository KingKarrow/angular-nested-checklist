import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChecklistComponent } from './nested-checklist.component';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule } from '@angular/forms';

describe('NestedChecklistComponent', () => {
  let component: NestedChecklistComponent;
  let fixture: ComponentFixture<NestedChecklistComponent>;
  let mockMatCheckbox: jasmine.SpyObj<MatCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChecklistComponent ],
      imports: [ FormsModule, MatCheckboxModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
