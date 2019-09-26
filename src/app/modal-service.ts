import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Redirect } from './redirect.modal';

@Injectable({providedIn: 'root'})
export class ModalService {
    modalEmitter = new Subject<Redirect>();
}
