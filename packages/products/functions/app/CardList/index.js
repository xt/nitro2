"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

var _apolloBoost = require("apollo-boost");

var _reactApollo = require("react-apollo");

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    allProducts {\n      productName\n      picUrl\n      price\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GET_PRODUCTS = (0, _apolloBoost.gql)(_templateObject()); //--------Emotion  Styles -------/

var CardList = function CardList() {
  return _react.default.createElement(_reactApollo.Query, {
    query: GET_PRODUCTS
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    console.log("------data-----", data);
    if (loading) return _react.default.createElement("div", null, "Loading...");
    if (error) return _react.default.createElement("div", null, "Error :");
    return _react.default.createElement(_react.default.Fragment, null, data.allProducts.map(function (product, index) {
      return _react.default.createElement(_Card.default, {
        key: index,
        product: product
      });
    }));
  });
};

var _default = CardList;
exports.default = _default;