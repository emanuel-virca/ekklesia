import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ResourcesService {
    constructor(private db: AngularFireDatabase) {
    }

    public get(): FirebaseListObservable<any[]> {
        return this.db.list('/resources');
    }
}