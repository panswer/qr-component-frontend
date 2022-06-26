import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDescriptionComponent } from './qr-description.component';

describe('QrDescriptionComponent', () => {
  let component: QrDescriptionComponent;
  let fixture: ComponentFixture<QrDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
