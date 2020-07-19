import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() icon: string;
  @Input() category: string;
  @Input() title: string;
  @Input() secondaryIcon: string;
  @Input() secondaryText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
