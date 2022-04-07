import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGeneralComponent } from './script-general.component';

describe('ScriptGeneralComponent', () => {
  let component: ScriptGeneralComponent;
  let fixture: ComponentFixture<ScriptGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
