import { makeAutoObservable } from 'mobx';

export class RootStore {
    user: { id: number } = { id: 1 };

    constructor() {
        makeAutoObservable(this);
    }
}
