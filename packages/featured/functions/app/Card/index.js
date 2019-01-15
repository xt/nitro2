"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 350px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  padding: 0.3em 0;\n  border-radius: 1em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n  padding: 0;\n  margin-top: 0;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 400px;\n  background: #fff;\n  padding: 0.25rem;\n  margin-top: 1rem;\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var cardStyle = (0, _core.css)(_templateObject());
var ulStyle = (0, _core.css)(_templateObject2());
var liStyle = (0, _core.css)(_templateObject3());
var imageStyle = (0, _core.css)(_templateObject4());
var nameStyle = (0, _core.css)(_templateObject5());

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
  }, "Price: Rs ", product.price))));
};

var _default = Card;
exports.default = _default;