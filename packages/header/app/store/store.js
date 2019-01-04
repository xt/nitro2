import { decorate, observable, computed } from "mobx";

class headerStore {
    constructor() {
        this.likedCountries = [];
        this.likedCountriesCount = 0;
    }

    get getLikedCountriesCount() {
        return this.likedCountries.length;
    }
}

decorate(headerStore, {
    likedCountries: observable,
    likedCountriesCount: observable,
    getLikedCountriesCount: computed
})

window.headerStore = window.headerStore || new headerStore();

export default window.headerStore;