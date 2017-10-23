import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import {environment} from '@env/environment';
import {ContactData} from '@app/contact/interaces/ContactData';
import {ContactFormResult} from '@app/contact/types/ContactFormResult';

@Injectable()
export class ContactService {

    constructor(private http: HttpClient) {}

    public sendContact(data: ContactData): Promise<ContactFormResult> {
        return this.http.post(`${environment.apiUrl}/contact`, data).toPromise().then(() => {
            return ContactFormResult.SUCCESS;
        }, () => {
            return ContactFormResult.ERROR;
        });
    }
}
