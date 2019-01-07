import { decorate, observable, computed } from "mobx";

class headerStore {
    constructor() {
        this.likedItems = [];
        this.likedItemsCount = 0;
    }

    get getLikedItemsCount() {
        return this.likedItems.length;
    }
}

decorate(headerStore, {
    likedItems: observable,
    likedItemsCount: observable,
    getLikedItemsCount: computed
})

window.headerStore = window.headerStore || new headerStore();

export default window.headerStore;