import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxAdvanceComponent } from './sandbox-advance.component';

describe('SandboxAdvanceComponent', () => {
  let component: SandboxAdvanceComponent;
  let fixture: ComponentFixture<SandboxAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxAdvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
