import { Component } from '@angular/core';

@Component({
  selector: 'app-zoomout',
  templateUrl: './zoomout.component.html',
  styleUrls: ['./zoomout.component.css']
})
export class ZoomoutComponent {
  zoomedOut: boolean = false;

  zoomOut() {
    this.zoomedOut = true;
  }

  zoomIn() {
    this.zoomedOut = false;
  }
}
