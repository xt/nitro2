"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _zenObservable = require("zen-observable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: san-serif;\n  font-size: 1rem;\n  color: #ff0066;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: thick solid #f00;\n  display: flex;\n  flex: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  cursor: pointer;\n  background: #eaeaea;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import createCache from "@emotion/cache";
var cardStyle = (0, _core.css)(_templateObject());
var nameStyle = (0, _core.css)(_templateObject2());

var Card = function Card(props) {
  var product = props.product;
  return (0, _core.jsx)("div", {
    css: cardStyle
  }, (0, _core.jsx)("h3", {
    css: nameStyle
  }, product.productName), (0, _core.jsx)("img", {
    src: product.picUrl
  }), (0, _core.jsx)("div", null, "Rs ", product.proce));
};

var _default = Card;
exports.default = _default;