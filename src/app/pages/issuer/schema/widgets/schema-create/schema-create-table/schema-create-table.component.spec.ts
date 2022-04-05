import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaCreateTableComponent } from './schema-create-table.component';

describe('SchemaCreateTableComponent', () => {
  let component: SchemaCreateTableComponent;
  let fixture: ComponentFixture<SchemaCreateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaCreateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaCreateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
