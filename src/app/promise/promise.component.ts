import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ValueFromArray } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  dell() {
    return true;
  }
  hp() {
    return false;
  }
  promiseVal: any;

  ngOnInit(): void {}
  click() {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dell()) {
        setTimeout(() => {
          return resolve(
            '   Lorem ipsum dolor sit amet consectetur adipisicing elit,  Nemo, aliquid assumenda saepe blanditiis quidem nobis veniam voluptatem explicabo! Nesciunt culpa optio dolores recusandae. Rerum, veniam praesentium tempore vitae saepe harum!    '
          );
        }, 2000);
      } else if (this.hp()) {
        setTimeout(() => {
          return resolve('hp is available');
        }, 2000);
      } else {
        reject('danger');
      }
    });

    buyLaptop
      .then((res) => {
        console.log('then code=', res);
        this.promiseVal = res;
      })
      .catch((res) => {
        console.log('catch code=', res);
        this.promiseVal = res;
      });
  }
}
