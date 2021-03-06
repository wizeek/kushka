import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StatusService {
    constructor(private http: HttpClient) {
    }

    getChampionList(): Observable<string[]> {
        return this.http.get<string[]>('/api/champions');
    }

}
