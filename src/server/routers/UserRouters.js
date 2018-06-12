import {
    route,
    GET,
    POST,
    before
} from 'awilix-koa'

@route('/user')
export default class UserRouter {
    constructor({
        indexService
    }) {
        this.indexService = indexService
    }

    @GET()
    async getUser(ctx) {
        ctx.body = {
            data: 'this is the user service'
        }
    }

    //User Module 子路由
    @route("/getbranchlist")
    @GET()
    getBranchList(ctx, next) {
        ctx.body = {
            id: ctx.params.id,
            branchList: this.indexService.getBranchList()
        }
    }

    @route("/pullbranch")
    @GET()
    pullBranch(ctx, next) {
        const branchStr = ctx.request.query.branch
        const branchArr = branchStr.split('/')
        ctx.body = indexModel.pullBranch(branchArr[0], branchArr[1])
    }
}