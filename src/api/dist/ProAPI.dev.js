"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _link = require("./link.js");

var ProAPI = {
  getAll: function getAll() {
    var url = "/products";
    return _link.axiosClient.get(url);
  },
  get: function get(id) {
    var url = "/products/".concat(id);
    return _link.axiosClient.get(url);
  },
  add: function add(product) {
    var url = "/products";
    return _link.axiosClient.post(url, product);
  },
  remove: function remove(id) {
    var url = "/products/".concat(id);
    return _link.axiosClient["delete"](url);
  }
};
var _default = ProAPI;
exports["default"] = _default;