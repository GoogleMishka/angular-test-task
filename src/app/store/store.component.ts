import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  start!: number
  intervalID: number = 1000
  firstVariable: number = -5
  secondVariable: number = 10

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

  startChanges() {
    this.intervalID = setInterval(() => {
      this.change()
    }, 1000)
  }

  checkClick($event: string) {
    switch ($event) {
      case 'start':
        this.startChanges()
        break
      case 'stop':
        clearInterval(this.intervalID)
        break
      case 'reset':
        window.location.reload()
        break
    }
  }
}
