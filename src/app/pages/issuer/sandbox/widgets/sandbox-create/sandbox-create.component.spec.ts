import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxCreateComponent } from './sandbox-create.component';

describe('SandboxCreateComponent', () => {
  let component: SandboxCreateComponent;
  let fixture: ComponentFixture<SandboxCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
