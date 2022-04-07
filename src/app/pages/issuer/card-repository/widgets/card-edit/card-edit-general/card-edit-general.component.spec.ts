import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditGeneralComponent } from './card-edit-general.component';

describe('CardEditGeneralComponent', () => {
  let component: CardEditGeneralComponent;
  let fixture: ComponentFixture<CardEditGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
