import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title property', () => {
    expect(component.title).toBeDefined();
  });

  it('should render title in an h1 tag', () => {
    fixture.detectChanges(); // triggers change detection
    const h1 = compiled.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1?.textContent).toContain('Hello, visual-resume');
  });

  it('should contain a container div', () => {
    fixture.detectChanges();
    const container = compiled.querySelector('.container');
    expect(container).toBeTruthy();
  });

  it('should have social links in the right-side div', () => {
    fixture.detectChanges();
    const socialLinks = compiled.querySelectorAll('.right-side .social-links a');
    expect(socialLinks.length).toBeGreaterThan(0);
  });
});
