/**
 * @description index数据拉取模块
 * @author Jerry
 */

//数据初始化
import shell from 'shelljs'
const successMessage = {
  success: true,
  message: "success"
};
const failMessage = {
  success: false,
  message: "failed"
};

/**
 * IndexModel类
 * @type {Class}
 */
class UserService {
  constructor() {

  }
  /**
   * 拉取分支列表
   * @return {Array} 
   */
  getBranchList() {
    //TODOS: 判断冲突
    const result = shell.exec("git branch -r");
    let resultArr = result.stdout.split('\n  ')
    const len = resultArr.length
    resultArr[0] = resultArr[0].slice(2, resultArr[0].length)
    resultArr[len - 1] = resultArr[len - 1].slice(0, resultArr[len - 1].length - 1)
    return resultArr
  }
  /**
   * pull选中分支
   * @return {Object} 
   */
  pullBranch(origin, branch) {
    shell.exec(`git pull ${origin} ${branch}:${branch}`)
    shell.exec(`git checkout ${branch}`)
    return successMessage
  }
}

export default UserService