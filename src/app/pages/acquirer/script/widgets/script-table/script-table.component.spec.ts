import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptTableComponent } from './script-table.component';

describe('ScriptTableComponent', () => {
  let component: ScriptTableComponent;
  let fixture: ComponentFixture<ScriptTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
