import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import FB from 'fb';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
        this.initFb();
    }

    public loadEvents(): void {
        this.initFb();
        // FB.api(
        //     "/{page-id}/events",
        //     function (response) {
        //         if (response && !response.error) {
        //             /* handle the result */
        //         }
        //     }
        // );
    }

    private initFb(): void {
        FB.init({
            appId            : '523677681336219',
            autoLogAppEvents : true,
            status           : true,
            xfbml            : true,
            version          : 'v2.9'
        });
    }
}
