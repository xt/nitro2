"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #0d0d0d;\n    padding: 0 1em;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n    color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var footerStyle = (0, _core.css)(_templateObject());

var Footer = function Footer(props) {
  return (0, _core.jsx)("div", {
    css: footerStyle
  }, "Copyright 2018 Nitro2");
};

var _default = Footer;
exports.default = _default;