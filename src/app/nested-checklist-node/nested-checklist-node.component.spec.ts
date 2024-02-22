import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChecklistNodeComponent } from './nested-checklist-node.component';

describe('NestedChecklistNodeComponent', () => {
  let component: NestedChecklistNodeComponent;
  let fixture: ComponentFixture<NestedChecklistNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChecklistNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedChecklistNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
