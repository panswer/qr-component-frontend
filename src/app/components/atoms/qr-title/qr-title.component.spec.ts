import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrTitleComponent } from './qr-title.component';

describe('QrTitleComponent', () => {
  let component: QrTitleComponent;
  let fixture: ComponentFixture<QrTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
