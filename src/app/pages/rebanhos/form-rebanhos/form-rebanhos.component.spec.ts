import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRebanhosComponent } from './form-rebanhos.component';

describe('FormRebanhosComponent', () => {
  let component: FormRebanhosComponent;
  let fixture: ComponentFixture<FormRebanhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRebanhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormRebanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
