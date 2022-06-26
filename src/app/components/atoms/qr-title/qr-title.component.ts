import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qr-title',
  templateUrl: './qr-title.component.html',
  styleUrls: ['./qr-title.component.css']
})
export class QrTitleComponent implements OnInit {

  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
