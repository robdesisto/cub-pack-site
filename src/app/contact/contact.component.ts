import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {RouteData} from '@app/core/interfaces/RouteData';
import {ContactService} from '@app/contact/services/ContactService';
import {ContactFormResult} from '@app/contact/types/ContactFormResult';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

    public pageData: Observable<RouteData>;
    public contactForm: FormGroup;
    public sendResponse: ContactFormResult;

    constructor(private route: ActivatedRoute, private contactService: ContactService) {
        this.pageData = this.route.data;

        this.contactForm = this.makeForm();
    }

    public onSubmit(): void {
        if (this.contactForm.valid) {
            this.contactService.sendContact(this.contactForm.value).then((result: ContactFormResult) => {
                this.sendResponse = result;
            });
        }
    }

    public clearForm(): void {
        this.contactForm = this.makeForm();
        this.sendResponse = null;
    }

    private makeForm(): FormGroup {
        return new FormGroup({
            name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            message: new FormControl(null, [Validators.required]),
            test: new FormControl(null, [
                Validators.required,
                Validators.min(4),
                Validators.max(4)]
            )
        });
    }
}

