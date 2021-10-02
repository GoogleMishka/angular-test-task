import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppWindowComponent} from './app-window.component';

describe('AppWindowComponent', () => {
  let component: AppWindowComponent;
  let fixture: ComponentFixture<AppWindowComponent>;
  const comp = new AppWindowComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppWindowComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if bigger than 0', () => {
      expect(comp.toggleClass(5)).toBeTruthy()
  })

  it('should return false if smaller than 0', () => {
      expect(comp.toggleClass(-5)).toBeFalsy()
  })

  it('should return "start" and disable button', () => {
    let result = ''
    const disabled = comp.disabled
    comp.clickMade.subscribe(v => result = v)
    comp.startChanges()
    expect(result).toBe('start')
    expect(comp.disabled).toBe((!disabled))
  })

  it('should return "stop" and enable button', () => {
    let result = ''
    const disabled = comp.disabled
    comp.clickMade.subscribe(v => result = v)
    comp.stopChanges()
    expect(result).toBe('stop')
    expect(comp.disabled).toBe((!disabled))
  })

  it('should return "reset"', () => {
    let result = ''
    comp.clickMade.subscribe(v => result = v)
    comp.resetVar()
    expect(result).toBe('reset')
  })

});
