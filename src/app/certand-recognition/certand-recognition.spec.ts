import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertandRecognition } from './certand-recognition';

describe('CertandRecognition', () => {
  let component: CertandRecognition;
  let fixture: ComponentFixture<CertandRecognition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertandRecognition],
    }).compileComponents();

    fixture = TestBed.createComponent(CertandRecognition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
