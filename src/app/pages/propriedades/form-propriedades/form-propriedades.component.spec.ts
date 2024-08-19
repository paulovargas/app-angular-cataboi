import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropriedadesComponent } from './form-propriedades.component';

describe('FormPropriedadesComponent', () => {
  let component: FormPropriedadesComponent;
  let fixture: ComponentFixture<FormPropriedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPropriedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPropriedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
