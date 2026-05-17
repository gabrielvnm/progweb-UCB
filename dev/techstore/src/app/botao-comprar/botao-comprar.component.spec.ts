import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoComprarComponent } from './botao-comprar.component';

describe('BotaoComprarComponent', () => {
  let component: BotaoComprarComponent;
  let fixture: ComponentFixture<BotaoComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoComprarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
