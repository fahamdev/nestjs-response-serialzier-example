"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const serialize_response_interceptor_1 = require("../interceptor/serialize-response.interceptor");
const partial_user_response_dto_1 = require("./dto/partial-user-response.dto");
const user_response_dto_1 = require("./dto/user-response.dto");
const user_modified_response_dto_1 = require("./dto/user-modified-response.dto");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAll() {
        return this.userService.findAll();
    }
    findAllWithPassword() {
        return this.userService.findAll();
    }
    findAllModified() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    findOneWithPassword(id) {
        return this.userService.findOne(+id);
    }
    findModifiedOne(id) {
        return this.userService.findOne(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, serialize_response_interceptor_1.SerializeResponse)(partial_user_response_dto_1.partialUserDto),
    (0, swagger_1.ApiTags)(`Get all Users`),
    (0, swagger_1.ApiOperation)({
        summary: "Returns partial(firstName, lastName and email) User Objects",
    }),
    openapi.ApiResponse({ status: 200, type: [require("./entities/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("whole"),
    (0, swagger_1.ApiTags)(`Get all Users`),
    (0, swagger_1.ApiOperation)({ summary: "Returns whole user objects" }),
    (0, serialize_response_interceptor_1.SerializeResponse)(user_response_dto_1.UserDto),
    openapi.ApiResponse({ status: 200, type: [require("./entities/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllWithPassword", null);
__decorate([
    (0, common_1.Get)("modified"),
    (0, swagger_1.ApiTags)(`Get all Users`),
    (0, swagger_1.ApiOperation)({
        summary: "Returns modified(role name instead of whole role object) user objects",
    }),
    (0, serialize_response_interceptor_1.SerializeResponse)(user_modified_response_dto_1.ModifiedUserDto),
    openapi.ApiResponse({ status: 200, type: [require("./entities/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAllModified", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiTags)(`Get Single User by ID`),
    (0, swagger_1.ApiOperation)({
        summary: "Returns partial(firstName, lastName and email) User Object by ID",
    }),
    (0, serialize_response_interceptor_1.SerializeResponse)(partial_user_response_dto_1.partialUserDto),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(":id/whole"),
    (0, swagger_1.ApiTags)(`Get Single User by ID`),
    (0, swagger_1.ApiOperation)({ summary: "Returns whole user object by ID" }),
    (0, serialize_response_interceptor_1.SerializeResponse)(user_response_dto_1.UserDto),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOneWithPassword", null);
__decorate([
    (0, common_1.Get)(":id/modified"),
    (0, swagger_1.ApiTags)(`Get Single User by ID`),
    (0, swagger_1.ApiOperation)({
        summary: "Returns modified(role name instead of whole role object) user object by ID",
    }),
    (0, serialize_response_interceptor_1.SerializeResponse)(user_modified_response_dto_1.ModifiedUserDto),
    openapi.ApiResponse({ status: 200, type: require("./entities/user.entity").User }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findModifiedOne", null);
UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map