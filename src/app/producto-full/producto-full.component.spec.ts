import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFullComponent } from './producto-full.component';

describe('ProductoFullComponent', () => {
  let component: ProductoFullComponent;
  let fixture: ComponentFixture<ProductoFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
