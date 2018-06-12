"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shelljs = require("shelljs");

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const successMessage = {
  success: true,
  message: "success"
}; /**
    * @description index数据拉取模块
    * @author Jerry
    */

//数据初始化

const failMessage = {
  success: false,
  message: "failed"
};

/**
 * IndexModel类
 * @type {Class}
 */
let UserService = class UserService {
  constructor() {}
  /**
   * 拉取分支列表
   * @return {Array} 
   */
  getBranchList() {
    //TODOS: 判断冲突
    const result = _shelljs2.default.exec("git branch -r");
    let resultArr = result.stdout.split('\n  ');
    const len = resultArr.length;
    resultArr[0] = resultArr[0].slice(2, resultArr[0].length);
    resultArr[len - 1] = resultArr[len - 1].slice(0, resultArr[len - 1].length - 1);
    return resultArr;
  }
  /**
   * pull选中分支
   * @return {Object} 
   */
  pullBranch(origin, branch) {
    _shelljs2.default.exec(`git pull ${origin} ${branch}:${branch}`);
    _shelljs2.default.exec(`git checkout ${branch}`);
    return successMessage;
  }
};
exports.default = UserService;