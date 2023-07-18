import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnChanges {

  @Input() imgSrc: string;

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
