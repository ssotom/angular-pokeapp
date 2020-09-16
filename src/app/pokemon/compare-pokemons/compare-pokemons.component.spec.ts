import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparePokemonsComponent } from './compare-pokemons.component';

describe('ComparePokemonsComponent', () => {
  let component: ComparePokemonsComponent;
  let fixture: ComponentFixture<ComparePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparePokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
