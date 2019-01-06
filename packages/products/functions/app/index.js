"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var _apolloClient = _interopRequireDefault(require("apollo-client"));

var _apolloLinkHttp = require("apollo-link-http");

var _reactApollo = require("react-apollo");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _CardList = _interopRequireDefault(require("./CardList"));

var _exenv = _interopRequireDefault(require("exenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import "cross-fetch/polyfill";
var client = new _apolloClient.default({
  ssrMode: true,
  link: (0, _apolloLinkHttp.createHttpLink)({
    uri: "https://api.graph.cool/simple/v1/cj5lb586dfhpg0122q4bwpg1x"
  }),
  cache: new _apolloCacheInmemory.InMemoryCache()
});

var ApolloApp = _react.default.createElement(_reactApollo.ApolloProvider, {
  client: client
}, "console.log('client',client)", _react.default.createElement(_CardList.default, null));

var _default = ApolloApp;
exports.default = _default;

if (_exenv.default.canUseDOM) {
  (0, _reactDom.hydrate)(ApolloApp(_CardList.default), document.getElementById("card-list"));
}