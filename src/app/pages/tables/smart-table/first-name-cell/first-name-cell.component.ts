import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-name-cell',
  templateUrl: './first-name-cell.component.html',
})
export class FirstNameCellComponent {
  @Input() value: string;
  @Input() rowData: any;
}
