import { decorate, observable, computed } from "mobx";

class productsStore {
  constructor() {
    this.likedItems = [];
    this.currentLikedItem = {};
  }
  get getLikedItems() {
    return this.likedItems;
  }
}

decorate(productsStore, {
  likedItems: observable,
  getLikedItems: computed
});

export default new productsStore();