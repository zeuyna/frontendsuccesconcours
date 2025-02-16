import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfeepritaneComponent } from './cfeepritane.component';

describe('CfeepritaneComponent', () => {
  let component: CfeepritaneComponent;
  let fixture: ComponentFixture<CfeepritaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfeepritaneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfeepritaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
