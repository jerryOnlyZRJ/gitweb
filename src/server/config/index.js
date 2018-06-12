/**
 * @description node层配置文档
 * @author Ranjay
 */
import path from 'path'

/**
 * node配置对象
 * @type {Object}
 */
let CONFIG = {
    'env': process.env.NODE_ENV, //"development", "production"
    '404Path': path.join(__dirname, '../views/common/404.html'),
    'viewsPath': path.join(__dirname, '../views'),
    'assetsPath': path.join(__dirname, '../assets'),
    'port': 8081
}
export default CONFIG