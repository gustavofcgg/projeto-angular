import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDoGugaComponent } from './componente-do-guga.component';

describe('ComponenteDoGugaComponent', () => {
  let component: ComponenteDoGugaComponent;
  let fixture: ComponentFixture<ComponenteDoGugaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteDoGugaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteDoGugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
