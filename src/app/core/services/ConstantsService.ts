/**
 * Basic Org Info. Icons from:
 * https://material.io/icons/
 */
import {Injectable} from '@angular/core';

import {NavItem} from '@app/core/interfaces/NavItem';
import {SocialLink} from '@app/core/interfaces/SocialLink';

@Injectable()
export class ConstantsService {

    public orgName = 'Cub Scout Pack 122';
    public orgLocation = 'Coronado CA, 92118';

    public navItems: NavItem[] = [
        {
            url: 'home',
            label: 'Home',
            icon: 'terrain'
        },
        {
            url: 'program',
            label: 'Our Program',
            icon: 'explore'
        },
        {
            url: 'charter',
            label: 'Charter',
            icon: 'group_work'
        },
        {
            url: 'connect',
            label: 'Connect',
            icon: 'feedback'
        }
    ];

    public socialLinks: SocialLink[] = [
        {
            name: 'facebook',
            url: 'https://www.facebook.com/pack122/'
        }
    ];
}
