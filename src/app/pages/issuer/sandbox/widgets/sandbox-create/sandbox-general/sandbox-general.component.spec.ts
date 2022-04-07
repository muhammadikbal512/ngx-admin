import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxGeneralComponent } from './sandbox-general.component';

describe('SandboxGeneralComponent', () => {
  let component: SandboxGeneralComponent;
  let fixture: ComponentFixture<SandboxGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
