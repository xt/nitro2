import { decorate, observable, computed } from "mobx";

class countryStore {
    constructor() {
        this.likedItems = [];
        this.currentLikedItem = {};
    }

    get updateHeaderStore() {
        return this.currentLikedItem;
    }
}

decorate(countryStore, {
    likedItems: observable,
    updateHeaderStore: computed
})

window.countryStore = window.countryStore || new countryStore();

export default window.countryStore;