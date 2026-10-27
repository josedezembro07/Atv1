import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheImagemComponent } from './detalhe-imagem';

describe('DetalheImagem', () => {
  let component: DetalheImagemComponent;
  let fixture: ComponentFixture<DetalheImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheImagemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheImagemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
