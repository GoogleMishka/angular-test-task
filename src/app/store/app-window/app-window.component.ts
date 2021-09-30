import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-app-window',
  templateUrl: './app-window.component.html',
  styleUrls: ['./app-window.component.scss']
})
export class AppWindowComponent implements OnInit {

  disabled: boolean = false
  @Input() first!: number
  @Input() second!: number
  @Output() clickMade: EventEmitter<string> = new EventEmitter<string>()
  nameBtn: string = 'Start'

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleClass(num: number) {
    return num > 0
  }

  startChanges() {
    this.disabled = !this.disabled
    this.clickMade.emit('start')
  }

  stopChanges() {
    this.nameBtn = 'Continue'
    this.disabled = !this.disabled
    this.clickMade.emit('stop')
  }

  resetVar() {
    this.clickMade.emit('reset')
  }
}
