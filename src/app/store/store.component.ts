import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  firstVariable: number = -5
  secondVariable: number = 10
  intervalStream: Observable<number> = interval(1000)
  sub!: Subscription

  constructor() {

  }

  ngOnInit(): void {

  }

  increase() {
    this.firstVariable++
  }

  decrease() {
    this.secondVariable--
  }

  change() {
    this.increase()
    this.decrease()
    this.decrease()
  }

  startWithoutTimeInterval() {
    this.sub = this.intervalStream.subscribe(() => {
      this.change()
    })
  }

  checkClick($event: string) {
    switch ($event) {
      case 'start':
        this.startWithoutTimeInterval()
        break
      case 'stop':
        this.sub.unsubscribe()
        break
      case 'reset':
        window.location.reload()
        break
    }
  }
}
