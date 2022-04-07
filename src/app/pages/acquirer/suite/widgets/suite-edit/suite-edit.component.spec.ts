import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteEditComponent } from './suite-edit.component';

describe('SuiteEditComponent', () => {
  let component: SuiteEditComponent;
  let fixture: ComponentFixture<SuiteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
