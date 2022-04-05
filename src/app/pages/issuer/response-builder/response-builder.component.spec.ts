import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseBuilderComponent } from './response-builder.component';

describe('ResponseBuilderComponent', () => {
  let component: ResponseBuilderComponent;
  let fixture: ComponentFixture<ResponseBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponseBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
