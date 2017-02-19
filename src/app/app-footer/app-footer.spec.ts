import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {AppFooterComponent} from './app-footer.component';

describe('Component: app-footer', () => {
    let component: AppFooterComponent;
    let fixture: ComponentFixture<AppFooterComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                AppFooterComponent
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue : '/' }
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppFooterComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('.component-app-footer'));

        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(typeof(component)).not.toBe(('undefined'));
    });
});

