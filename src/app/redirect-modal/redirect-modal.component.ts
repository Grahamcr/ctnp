import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalService } from '../modal-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-redirect-modal',
  templateUrl: './redirect-modal.component.html',
  styleUrls: ['./redirect-modal.component.less']
})
export class RedirectModalComponent implements OnInit {

  private urlSub: Subscription;
  @Input() url: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  hideModal() {
    this.modalService.modalEmitter.next(false);
  }


}
