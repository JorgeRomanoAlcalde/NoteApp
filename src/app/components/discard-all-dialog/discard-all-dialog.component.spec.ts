import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardAllDialogComponent } from './discard-all-dialog.component';

describe('DiscardAllDialogComponent', () => {
  let component: DiscardAllDialogComponent;
  let fixture: ComponentFixture<DiscardAllDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscardAllDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscardAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
