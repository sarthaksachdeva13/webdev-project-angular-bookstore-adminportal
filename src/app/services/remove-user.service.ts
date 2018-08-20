import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class RemoveUserService {

    constructor(private http: Http) {
    }

    sendUser(userId: number) {
        const url = 'http://localhost:8181/user/remove';

        const headers = new Headers({
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('xAuthToken')
        });

        return this.http.post(url, userId, {headers: headers});
    }

}
