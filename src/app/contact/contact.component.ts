import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import {RouteData} from '@app/core/interfaces/RouteData';
import {ContactService} from '@app/contact/services/ContactService';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

    public pageData: Observable<RouteData>;
    public contactForm: FormGroup;
    public messageSent: boolean;

    constructor(private route: ActivatedRoute, private contactService: ContactService, private changeRef: ChangeDetectorRef) {
        this.pageData = this.route.data;

        this.contactForm = this.makeForm();
    }

    public onSubmit(): void {
        if (this.contactForm.valid) {
            this.contactService.sendContact(this.contactForm.value);
            this.messageSent = true;
            this.changeRef.markForCheck();
        }
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

