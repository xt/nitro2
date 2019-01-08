"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-left:5px;\n  flex-flow: row wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//--------Emotion  Styles -------/
var cardList = (0, _core.css)(_templateObject());

var CardList = function CardList(props) {
  var productList = props.data.allProducts.map(function (product, index) {
    return (0, _core.jsx)(_Card.default, {
      key: index,
      product: product
    });
  });
  return (0, _core.jsx)(_react.default.Fragment, null, (0, _core.jsx)("header", null, (0, _core.jsx)("h1", null, "Products")), (0, _core.jsx)("div", {
    css: cardList
  }, productList));
};

var _default = CardList;
exports.default = _default;