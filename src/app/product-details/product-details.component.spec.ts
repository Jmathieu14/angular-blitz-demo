import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { productsStub } from 'src/test/products-stub';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name, price and description', () => {
    component.product = productsStub[0];
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const productName = fixture.debugElement.query(By.css('h3'));
    const productPrice = fixture.debugElement.query(By.css('h4'));
    const productDescription = fixture.debugElement.query(By.css('p'));
    expect(productName.nativeElement.innerText).toBe(productsStub[0].name);
    expect(productPrice.nativeElement.innerText).toBe('$' + productsStub[0].price + '.00');
    expect(productDescription.nativeElement.innerText).toBe(productsStub[0].description);
  });
});


