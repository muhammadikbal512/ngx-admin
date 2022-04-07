import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptEditGeneralComponent } from './script-edit-general.component';

describe('ScriptEditGeneralComponent', () => {
  let component: ScriptEditGeneralComponent;
  let fixture: ComponentFixture<ScriptEditGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptEditGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
