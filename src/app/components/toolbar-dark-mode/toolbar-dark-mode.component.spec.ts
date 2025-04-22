import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarDarkModeComponent } from './toolbar-dark-mode.component';

describe('ToolbarDarkModeComponent', () => {
  let component: ToolbarDarkModeComponent;
  let fixture: ComponentFixture<ToolbarDarkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarDarkModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarDarkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
