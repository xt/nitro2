"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 0;\n    top: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 2em;\n    position: relative;\n    width: 50px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var notifBox = (0, _core.css)(_templateObject());
var likeCountBox = (0, _core.css)(_templateObject2());
var Notification = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store;
  return (0, _core.jsx)("div", {
    css: notifBox
  }, (0, _core.jsx)("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAA+ElEQVR4AeXPMSjEYRjH8SfKIqOUY5DMyg7KZGGwT0hsEmW6wmoyKtkX+3STvWQw2QzEIJJ0PsYb7rzv++9u4vOM3/r1vvGnqQO47NXQl9HeDHEW3bKkukfj0c6N6vajnTVVNU1HO33uVXMRnVlXxYdadGbAo3In8Tt7Sj0bTA0NeVVmJ9IcK3GnP9IM+5S3GnnO5FxHCbNyZqKEKynfdqOEOdB0pN7xFqOEfrfgPLpjBXwYie44AA/q2VuIFMtK1SPNaflQhnmHXX+th0xoeNMwla8Jap4AT2q5mmBDy3auJtjUspWrCca8tB6frwkmNbxrmMjXf+IHAnWgsliFmvYAAAAASUVORK5CYII=",
    alt: ""
  }), (0, _core.jsx)("div", {
    css: likeCountBox
  }, store.getLikedCountriesCount));
});
var _default = Notification;
exports.default = _default;