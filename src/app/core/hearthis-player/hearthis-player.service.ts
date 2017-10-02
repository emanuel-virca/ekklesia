import { Injectable, Optional, SkipSelf } from "@angular/core";
import { Subject } from "rxjs/Subject";

export interface HearthisPlayerState {
    play: number;
}

@Injectable()
export class HearthisPlayerService {
    private hearthisPlayerSubject = new Subject<HearthisPlayerState>();

    hearthisPlayerState = this.hearthisPlayerSubject.asObservable();

    constructor( @Optional() @SkipSelf() prior: HearthisPlayerService) {
        if (prior) { return prior; }
    }

    play(id) {
        this.hearthisPlayerSubject.next(<HearthisPlayerState>{ play: id });
    }

    hide() {
        this.hearthisPlayerSubject.next(<HearthisPlayerState>{ play: null });
    }
}