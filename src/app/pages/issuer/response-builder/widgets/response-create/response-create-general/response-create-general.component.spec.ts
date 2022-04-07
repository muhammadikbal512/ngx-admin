import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseCreateGeneralComponent } from './response-create-general.component';

describe('ResponseCreateGeneralComponent', () => {
  let component: ResponseCreateGeneralComponent;
  let fixture: ComponentFixture<ResponseCreateGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseCreateGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseCreateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
