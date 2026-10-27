import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCursos } from './home-cursos';

describe('HomeCursos', () => {
  let component: HomeCursos;
  let fixture: ComponentFixture<HomeCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCursos],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
