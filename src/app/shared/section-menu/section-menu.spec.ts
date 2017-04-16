import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SectionMenuComponent} from './section-menu.component';

describe('Component: section-menu', () => {
    let component: SectionMenuComponent;
    let fixture: ComponentFixture<SectionMenuComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                SectionMenuComponent
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionMenuComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('.component-section-menu'));

        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(typeof(component)).not.toBe(('undefined'));
    });
});

