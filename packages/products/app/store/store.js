import { decorate, observable, computed } from "mobx";

class countryStore {
  constructor() {
    this.likedCountries = [];
    this.currentLikedCountry = {};
  }

  get updateHeaderStore() {
    return this.currentLikedCountry;
  }
}

decorate(countryStore, {
  likedCountries: observable,
  updateHeaderStore: computed
});

countryStore = countryStore || new countryStore();

export default countryStore;
