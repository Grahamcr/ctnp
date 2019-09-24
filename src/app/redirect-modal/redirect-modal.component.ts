import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal-service';

@Component({
  selector: 'app-redirect-modal',
  templateUrl: './redirect-modal.component.html',
  styleUrls: ['./redirect-modal.component.less']
})
export class RedirectModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  hideModal() {
    this.modalService.modalEmitter.next(false);
  }

}
