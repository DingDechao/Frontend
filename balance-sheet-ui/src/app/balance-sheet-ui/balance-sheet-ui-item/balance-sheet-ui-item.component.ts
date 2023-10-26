import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-sheet-ui-item',
  templateUrl: './balance-sheet-ui-item.component.html',
  styleUrls: ['./balance-sheet-ui-item.component.css']
})
export class BalanceSheetUiItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;

  constructor() {
    this.name = 'Dechao';
    this.code = 'ddc';
    this.price = 100;
    this.previousPrice = 80;
  }

  ngOnInit() {
    // this.name = 'Dechao';
    // this.code = 'ddc';
    // this.price = 100;
    // this.previousPrice = 80;
  }
}
