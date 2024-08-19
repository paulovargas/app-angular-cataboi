import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnimaisComponent } from './form-animais.component';

describe('FormAnimaisComponent', () => {
  let component: FormAnimaisComponent;
  let fixture: ComponentFixture<FormAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAnimaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
