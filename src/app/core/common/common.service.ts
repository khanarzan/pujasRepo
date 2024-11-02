import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  visible: boolean  = false;

  constructor() { }
  showDialog() {
    this.visible = true;
  }
  closeDialog() {
    this.visible = false;
  }
}
