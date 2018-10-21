import { TestBed, async } from '@angular/core/testing';
import {  EventsAppComponent } from './events-app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsAppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent( EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ps-events-ng'`, async(() => {
    const fixture = TestBed.createComponent( EventsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ps-events-ng');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent( EventsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ps-events-ng!');
  }));
});
