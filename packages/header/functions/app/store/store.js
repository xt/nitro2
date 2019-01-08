"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobx = require("mobx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var headerStore =
/*#__PURE__*/
function () {
  function headerStore() {
    _classCallCheck(this, headerStore);

    this.likedItems = [];
    this.likedItemsCount = 0;
  }

  _createClass(headerStore, [{
    key: "getLikedItemsCount",
    get: function get() {
      return this.likedItems.length;
    }
  }]);

  return headerStore;
}();

(0, _mobx.decorate)(headerStore, {
  likedItems: _mobx.observable,
  likedItemsCount: _mobx.observable,
  getLikedItemsCount: _mobx.computed
});
var _default = headerStore;
exports.default = _default;