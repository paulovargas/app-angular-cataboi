import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosRebanhosComponent } from './todos-rebanhos.component';

describe('TodosRebanhosComponent', () => {
  let component: TodosRebanhosComponent;
  let fixture: ComponentFixture<TodosRebanhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosRebanhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosRebanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
