'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * node配置对象
 * @type {Object}
 */
let CONFIG = {
  'env': process.env.NODE_ENV, //"development", "production"
  '404Path': _path2.default.join(__dirname, '../views/common/404.html'),
  'viewsPath': _path2.default.join(__dirname, '../views'),
  'assetsPath': _path2.default.join(__dirname, '../assets'),
  'port': 8081
}; /**
    * @description node层配置文档
    * @author Ranjay
    */
exports.default = CONFIG;