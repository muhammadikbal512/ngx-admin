import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxClientComponent } from './sandbox-client.component';

describe('SandboxClientComponent', () => {
  let component: SandboxClientComponent;
  let fixture: ComponentFixture<SandboxClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
