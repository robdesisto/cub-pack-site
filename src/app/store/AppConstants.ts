import {SocialLink} from '@app/store/interfaces/SocialLink';

export class AppConstants {

    public static orgName = 'Cub Scout Pack 122';
    public static orgLocation = 'Coronado CA, 92118';
    public static apiUrl = 'https://cub-pack-backend.herokuapp.com';

    public static pinnedPages: string[] = ['home'];
    public static anchoredPages: string[] = ['connect'];

    public static socialLinks: SocialLink[] = [
        {
            name: 'facebook',
            url: 'https://www.facebook.com/pack122/'
        }
    ];
}
