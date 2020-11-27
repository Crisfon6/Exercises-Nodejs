"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)(); //ROUTES

router.get('/', function (req, res) {
  return res.send({
    message: "HEllo world"
  });
});
var _default = router;
exports["default"] = _default;