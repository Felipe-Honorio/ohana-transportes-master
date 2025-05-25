import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRoutesComponent } from './delivery-routes.component';

describe('DeliveryRoutesComponent', () => {
  let component: DeliveryRoutesComponent;
  let fixture: ComponentFixture<DeliveryRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryRoutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
