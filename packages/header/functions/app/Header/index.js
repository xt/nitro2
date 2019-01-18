"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _Logo = _interopRequireDefault(require("../Logo"));

var _NavItem = _interopRequireDefault(require("../NavItem"));

var _Notification = _interopRequireDefault(require("../Notification"));

var _store = _interopRequireDefault(require("../store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 3rem 0 0 0rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  background: #0d0d0d;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 1em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import pubSub from "../../../vendors/pubsub/pub-sub";
var headerStyle = (0, _core.css)(_templateObject());
var navbarStyle = (0, _core.css)(_templateObject2());
var items = ["Home", "About", "New-Arrivals"];

var Header = function Header(_ref) {
  var active = _ref.active,
      setActive = _ref.setActive;
  return (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)("div", {
    css: headerStyle
  }, (0, _core.jsx)(_Logo.default, null), (0, _core.jsx)("nav", {
    css: navbarStyle
  }, items.map(function (item, index) {
    return (0, _core.jsx)(_NavItem.default, {
      key: index,
      index: index,
      active: index === active,
      onClick: setActive,
      linkName: item
    });
  })), (0, _core.jsx)(_Notification.default, {
    store: _store.default
  })));
}; // let subscriptionAddItem = pubSub.subscribe("itemAdded", item => {
//   store.likedItems.push(item);
// });
// let subscriptionRemoveItem = pubSub.subscribe("itemRemoved", item => {
//   store.likedItems.splice(store.likedItems.findIndex((itemInStore) => {
//     return itemInStore.sku === item.sku
//   }), 1);
// });


var _default = Header;
exports.default = _default;