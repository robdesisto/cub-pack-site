import {trigger, animate, style, group, query, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        group([  // block executes in parallel
            query(':enter', [
                style({opacity: 0}),
                animate('0.5s ease-in-out', style({opacity: 1}))
            ], {optional: true}),
            query(':leave', [
                animate('0s ease-in-out', style({opacity: 0}))
            ], {optional: true})
        ])
    ])
]);
