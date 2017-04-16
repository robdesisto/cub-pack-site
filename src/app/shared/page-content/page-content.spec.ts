import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageContentComponent} from './page-content.component';

describe('Component: page-content', () => {
    let component: PageContentComponent;
    let fixture: ComponentFixture<PageContentComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                PageContentComponent
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageContentComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('.component-page-content'));

        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(typeof(component)).not.toBe(('undefined'));
    });
});