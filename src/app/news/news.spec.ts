import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {NewsComponent} from './news.component';

describe('Component: news', () => {
    let component: NewsComponent;
    let fixture: ComponentFixture<NewsComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                NewsComponent
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('.component-news'));

        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(typeof(component)).not.toBe(('undefined'));
    });
});
