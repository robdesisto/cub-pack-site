import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataService} from './DataService';

@Injectable()
export class ContentfulService extends DataService {

    constructor() {
        super();
    }
}