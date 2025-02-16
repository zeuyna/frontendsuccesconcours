import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremComponent } from './crem.component';

describe('CremComponent', () => {
  let component: CremComponent;
  let fixture: ComponentFixture<CremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CremComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
