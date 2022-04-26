import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroSelicComponent } from './tesouro-selic.component';

describe('TesouroSelicComponent', () => {
  let component: TesouroSelicComponent;
  let fixture: ComponentFixture<TesouroSelicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesouroSelicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroSelicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
