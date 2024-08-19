import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEventosComponent } from './form-eventos.component';

describe('FormEventosComponent', () => {
  let component: FormEventosComponent;
  let fixture: ComponentFixture<FormEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
