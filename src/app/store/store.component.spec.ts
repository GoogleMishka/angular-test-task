import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StoreComponent} from './store.component';
import {AppWindowComponent} from "./app-window/app-window.component";

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let comp = new StoreComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreComponent, AppWindowComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    comp = new StoreComponent();
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return incremented first variable ', () => {
    const result = comp.firstVariable
    comp.increase()
    expect(comp.firstVariable).toBeGreaterThan(result)
  })

  it('should return decremented second variable ', () => {
    const result = comp.secondVariable
    comp.decrease()
    expect(comp.secondVariable).toBeLessThan(result)
  })

  it('should return incremented first variable for 1 and decremented second variable for 2 ', () => {
    const result = comp.firstVariable
    const result1 = comp.secondVariable
    comp.change()
    expect(comp.firstVariable).toBeGreaterThan(result)
    expect(comp.secondVariable).toBeLessThan(result1)
  })

  it('should return defined Subscription value', () => {
    comp.startWithoutTimeInterval()
    expect(comp.sub).toBeDefined()
  })

  it(`should return defined variables`, () => {
    expect(comp.firstVariable).toBeDefined()
    expect(comp.secondVariable).toBeDefined()
  })
});
