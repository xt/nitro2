const path = require("path");

const fetchTemplateFs = require("node-tailor/lib/fetch-template");
const ACCEPT_HEADERS = [
  "accept-language",
  "referer",
  "user-agent",
  "x-request-uri",
  "x-request-host",
  "cookie"
];

module.exports = {
  fetchTemplate: fetchTemplateFs(
    path.join(__dirname, "..", "templates"),
    () => "app-shell"
  ),

  filterRequestHeaders: (attributes, request) => {
    const { public: publicFragment } = attributes;
    const { headers = {} } = request;

    return publicFragment
      ? {}
      : ACCEPT_HEADERS.reduce((newHeaders, key) => {
          headers[key] && (newHeaders[key] = headers[key]);
          return newHeaders;
        }, {});
  }
};
