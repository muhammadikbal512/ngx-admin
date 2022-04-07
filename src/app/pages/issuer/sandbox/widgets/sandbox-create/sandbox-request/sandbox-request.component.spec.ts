import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxRequestComponent } from './sandbox-request.component';

describe('SandboxRequestComponent', () => {
  let component: SandboxRequestComponent;
  let fixture: ComponentFixture<SandboxRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
