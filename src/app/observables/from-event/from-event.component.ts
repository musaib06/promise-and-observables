import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { count, fromEvent } from 'rxjs';
import { DesignUtillityService } from 'src/app/appServices/design-utillity.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private _design: DesignUtillityService) {}
  @ViewChild('addBtn') addBtn!: ElementRef;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let countValue = 'video' + count++;
      console.log(countValue);
      this._design.print(countValue, 'elcontainer');
      this._design.print(countValue, 'elcontainer2');
    });
  }
}
