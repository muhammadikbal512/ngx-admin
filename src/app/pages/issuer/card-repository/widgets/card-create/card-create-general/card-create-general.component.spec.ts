import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateGeneralComponent } from './card-create-general.component';

describe('CardCreateGeneralComponent', () => {
  let component: CardCreateGeneralComponent;
  let fixture: ComponentFixture<CardCreateGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreateGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
