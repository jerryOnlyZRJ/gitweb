'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

var _awilixKoa = require('awilix-koa');

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

let UserRouter = (_dec = (0, _awilixKoa.route)('/user'), _dec2 = (0, _awilixKoa.GET)(), _dec3 = (0, _awilixKoa.route)("/getbranchlist"), _dec4 = (0, _awilixKoa.GET)(), _dec5 = (0, _awilixKoa.route)("/pullbranch"), _dec6 = (0, _awilixKoa.GET)(), _dec(_class = (_class2 = class UserRouter {
    constructor({
        indexService
    }) {
        this.indexService = indexService;
    }

    async getUser(ctx) {
        ctx.body = {
            data: 'this is the user service'
        };
    }

    //User Module 子路由

    getBranchList(ctx, next) {
        ctx.body = {
            id: ctx.params.id,
            branchList: this.indexService.getBranchList()
        };
    }

    pullBranch(ctx, next) {
        const branchStr = ctx.request.query.branch;
        const branchArr = branchStr.split('/');
        ctx.body = indexModel.pullBranch(branchArr[0], branchArr[1]);
    }
}, (_applyDecoratedDescriptor(_class2.prototype, 'getUser', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'getUser'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'getBranchList', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'getBranchList'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'pullBranch', [_dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'pullBranch'), _class2.prototype)), _class2)) || _class);
exports.default = UserRouter;