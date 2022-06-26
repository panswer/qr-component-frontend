import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qr-description',
  templateUrl: './qr-description.component.html',
  styleUrls: ['./qr-description.component.css']
})
export class QrDescriptionComponent implements OnInit {

  @Input() description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
