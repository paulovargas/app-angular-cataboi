import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodasPropriedadesComponent } from './todas-propriedades.component';

describe('TodasPropriedadesComponent', () => {
  let component: TodasPropriedadesComponent;
  let fixture: ComponentFixture<TodasPropriedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodasPropriedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodasPropriedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
