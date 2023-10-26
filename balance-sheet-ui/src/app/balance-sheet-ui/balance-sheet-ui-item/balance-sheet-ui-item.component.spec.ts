import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetUiItemComponent } from './balance-sheet-ui-item.component';

describe('BalanceSheetUiItemComponent', () => {
  let component: BalanceSheetUiItemComponent;
  let fixture: ComponentFixture<BalanceSheetUiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalanceSheetUiItemComponent]
    });
    fixture = TestBed.createComponent(BalanceSheetUiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
