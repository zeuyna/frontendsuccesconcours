import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouslesconcoursComponent } from './touslesconcours.component';

describe('TouslesconcoursComponent', () => {
  let component: TouslesconcoursComponent;
  let fixture: ComponentFixture<TouslesconcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouslesconcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouslesconcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
