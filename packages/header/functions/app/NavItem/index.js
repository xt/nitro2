"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 1.3em;\n  font-weight: bold;\n  text-transform: capitalize;\n  text-decoration: none;\n  width: 100px;\n  height: 18px;\n  margin-right: 20px;\n  cursor: pointer;\n  transition: all 0.3s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var navItem = (0, _core.css)(_templateObject());

var NavItem = function NavItem(_ref) {
  var index = _ref.index,
      active = _ref.active,
      linkName = _ref.linkName,
      _onClick = _ref.onClick;
  return (0, _core.jsx)("a", {
    href: linkName,
    onClick: function onClick() {
      return _onClick(index);
    },
    className: (0, _classnames.default)({
      current: active
    }),
    css: navItem
  }, linkName);
};

NavItem.propTypes = {
  active: _propTypes.default.bool,
  index: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func
};
NavItem.defaultProps = {
  active: false,
  onClick: function onClick() {}
};
var _default = NavItem;
exports.default = _default;