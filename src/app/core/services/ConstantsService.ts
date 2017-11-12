/**
 * Basic Org Info. Icons from:
 * https://material.io/icons/
 */
import {Injectable} from '@angular/core';

import {SocialLink} from '@app/core/interfaces/SocialLink';

@Injectable()
export class ConstantsService {

    public orgName = 'Cub Scout Pack 122';
    public orgLocation = 'Coronado CA, 92118';

    public pinnedPages: string[] = ['home'];
    public anchoredPages: string[] = ['connect'];

    public socialLinks: SocialLink[] = [
        {
            name: 'facebook',
            url: 'https://www.facebook.com/pack122/'
        }
    ];
}
