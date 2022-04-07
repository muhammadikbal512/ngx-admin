import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteTableComponent } from './suite-table.component';

describe('SuiteTableComponent', () => {
  let component: SuiteTableComponent;
  let fixture: ComponentFixture<SuiteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
