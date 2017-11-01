import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ResourcesService {
    constructor(private db: AngularFireDatabase) {
    }

    public get(): FirebaseListObservable<any[]> {
        return this.db.list('/resources', {
            query: {
                orderByChild: 'dateTime'
            }
        }).map(resources => {
            return resources.reverse();
        }) as FirebaseListObservable<any[]>;
    }
}