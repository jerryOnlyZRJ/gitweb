import {
    route,
    GET,
    POST,
    before
} from 'awilix-koa'

@route('/')
@route('/index.html')
export default class IndexRouter {
    constructor() {

    }

    @GET()
    async getIndex(ctx, next) {
        ctx.body = {
            data: 'success'
        };
    }

}