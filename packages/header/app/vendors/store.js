import { observable } from "mobx";

let store = observable({
    likedCountries: [],
    likedCountriesCount: 0
});

export default store;