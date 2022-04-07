import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseEditGeneralComponent } from './response-edit-general.component';

describe('ResponseEditGeneralComponent', () => {
  let component: ResponseEditGeneralComponent;
  let fixture: ComponentFixture<ResponseEditGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseEditGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
