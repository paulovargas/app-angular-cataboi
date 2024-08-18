import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebanhosComponent } from './rebanhos.component';

describe('RebanhosComponent', () => {
  let component: RebanhosComponent;
  let fixture: ComponentFixture<RebanhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RebanhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RebanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
