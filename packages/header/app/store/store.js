import { decorate, observable, computed } from "mobx";

class headerStore {
    constructor() {
        this.likedItems = [];
    }

    get getLikedItemsCount() {
        return this.likedItems.length;
    }
}

decorate(headerStore, {
    likedItems: observable,
    getLikedItemsCount: computed
})

export default new headerStore();