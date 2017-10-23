import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {environment} from '@env/environment';
import {ContactData} from '@app/contact/interaces/ContactData';

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) {}

    public sendContact(data: ContactData): Promise<boolean> {
        return this.http.post(`${environment.apiUrl}/contact`, data).toPromise().then((res) => {
            return true;
        }, (res) => {
            return false;
        });
    }
}
