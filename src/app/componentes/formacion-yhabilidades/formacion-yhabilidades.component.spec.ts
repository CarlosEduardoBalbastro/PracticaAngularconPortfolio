import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionYHabilidadesComponent } from './formacion-yhabilidades.component';

describe('FormacionYHabilidadesComponent', () => {
  let component: FormacionYHabilidadesComponent;
  let fixture: ComponentFixture<FormacionYHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionYHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionYHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
