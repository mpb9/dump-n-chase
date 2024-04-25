import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractComponent } from './interact.component';

describe('InteractComponent', () => {
  let component: InteractComponent;
  let fixture: ComponentFixture<InteractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
