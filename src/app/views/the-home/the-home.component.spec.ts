import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHomeComponent } from './the-home.component';

describe('TheHomeComponent', () => {
  let component: TheHomeComponent;
  let fixture: ComponentFixture<TheHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
