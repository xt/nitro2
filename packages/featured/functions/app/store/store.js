"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = require("mobx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var productsStore =
/*#__PURE__*/
function () {
  function productsStore() {
    _classCallCheck(this, productsStore);

    this.likedItems = [];
    this.currentLikedItem = {};
  }

  _createClass(productsStore, [{
    key: "getLikedItems",
    get: function get() {
      return this.likedItems;
    }
  }]);

  return productsStore;
}();

(0, _mobx.decorate)(productsStore, {
  likedItems: _mobx.observable,
  getLikedItems: _mobx.computed
});

var _default = new productsStore();

exports.default = _default;