import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasteefComponent } from './fasteef.component';

describe('FasteefComponent', () => {
  let component: FasteefComponent;
  let fixture: ComponentFixture<FasteefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FasteefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasteefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
