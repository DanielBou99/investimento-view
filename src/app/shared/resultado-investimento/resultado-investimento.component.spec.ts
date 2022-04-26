import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoInvestimentoComponent } from './resultado-investimento.component';

describe('ResultadoInvestimentoComponent', () => {
  let component: ResultadoInvestimentoComponent;
  let fixture: ComponentFixture<ResultadoInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoInvestimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
