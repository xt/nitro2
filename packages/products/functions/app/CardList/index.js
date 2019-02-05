"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _Card = _interopRequireDefault(require("../Card"));

var _store = _interopRequireDefault(require("../store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 5px;\n  flex-flow: row wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 1rem 0.5rem 0rem 0.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//--------Emotion  Styles -------/
var headingStyle = (0, _core.css)(_templateObject());
var cardList = (0, _core.css)(_templateObject2());

var CardList = function CardList(props) {
  var productList = props.data.allProducts.map(function (product, index) {
    return (0, _core.jsx)(_Card.default, {
      key: index,
      product: product,
      store: _store.default
    });
  });
  return (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)("h2", {
    css: headingStyle
  }, "New Arrivals"), (0, _core.jsx)("div", {
    css: cardList
  }, productList));
};

var _default = CardList;
exports.default = _default;