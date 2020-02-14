import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokebelloComponent } from './pokebello.component';

describe('PokebelloComponent', () => {
  let component: PokebelloComponent;
  let fixture: ComponentFixture<PokebelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokebelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokebelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
