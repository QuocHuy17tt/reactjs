"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _link = require("./link.js");

var OderPro = {
  getAll: function getAll() {
    var url = "/oder";
    return _link.axiosClient.get(url);
  },
  get: function get(id) {
    var url = "/oder/".concat(id);
    return _link.axiosClient.get(url);
  },
  addOder: function addOder(oder) {
    var url = "/oder";
    return _link.axiosClient.post(url, oder);
  },
  remove: function remove(id) {
    var url = "/oder/".concat(id);
    return _link.axiosClient["delete"](url);
  }
};
var _default = OderPro;
exports["default"] = _default;