"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _zenObservable = require("zen-observable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom:0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nlist-style: none;\npadding: 0.3em 0;\nborder-radius: 1em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n  padding: 0;\n  margin-top:0;\n  display:flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: #009999 url(http://i.imgur.com/RWKrr8S.png);\n  background-repeat: no-repeat;\n  background-position: 2em 50%;\n  background-size: 2em;\n  border: 0;\n  border-radius: 4px;\n  cursor: pointer;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 13px;\n  padding: 1em 3em;\n  padding-left: 6em;\n  text-transform: uppercase;\n  display: block;\n  width: 100%;\n  &:hover {\n    background-color: #006B6B;\n    background-size: 2.2em;\n    background-position: 1.5em 50%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmax-width: 400px;\nbackground: #fff;\npadding: 0.5em;\nmargin: 1em 0;\nborder-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import createCache from "@emotion/cache";
var cardStyle = (0, _core.css)(_templateObject());
var buttonStyle = (0, _core.css)(_templateObject2());
var ulStyle = (0, _core.css)(_templateObject3());
var liStyle = (0, _core.css)(_templateObject4());
var imageStyle = (0, _core.css)(_templateObject5());
var nameStyle = (0, _core.css)(_templateObject6());

var Card = function Card(props) {
  var product = props.product;
  return (0, _core.jsx)("div", {
    css: cardStyle
  }, (0, _core.jsx)("img", {
    css: imageStyle,
    src: product.picUrl
  }), (0, _core.jsx)("h4", {
    css: nameStyle
  }, product.productName), (0, _core.jsx)("aside", null, (0, _core.jsx)("ul", {
    css: ulStyle
  }, (0, _core.jsx)("li", {
    css: liStyle
  }, "Price: Rs ", product.price), (0, _core.jsx)("li", null, "In Stock")), (0, _core.jsx)("button", {
    css: buttonStyle
  }, "Add to Cart  ")));
};

var _default = Card;
exports.default = _default;