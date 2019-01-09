import { decorate, observable, computed, autorun, toJS } from "mobx";

let firstRun = true;

class HeaderStore {
    constructor(defaults) {
        this.likedItems = defaults ? defaults.likedItems : [];
    }

    get getLikedItemsCount() {
        return this.likedItems.length;
    }
}

decorate(HeaderStore, {
    likedItems: observable,
    getLikedItemsCount: computed
});

let cachedStore = window.localStorage && window.localStorage.getItem("headerStore");

const headerStoreInstance = new HeaderStore(JSON.parse(cachedStore));

autorun(() => {
    const storeCopy = JSON.stringify(toJS(headerStoreInstance));
    if (!firstRun) {
        hydrateStore(storeCopy);
    }
    firstRun = false;
});

const hydrateStore = (store) => {
    if(window.localStorage) {
        localStorage.setItem("headerStore", store);
    }
};

export default headerStoreInstance;