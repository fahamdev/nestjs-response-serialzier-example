"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                id: 1,
                firstName: "First",
                lastName: "user",
                email: "first@mail.com",
                password: "1234567890",
                roles: [
                    { id: 1, name: "admin", priority: 1 },
                    { id: 2, name: "user", priority: 2 },
                ],
            },
            {
                id: 2,
                firstName: "Second",
                lastName: "User",
                email: "second@mail.com",
                password: "93745629383",
                roles: [{ id: 2, name: "user", priority: 2 }],
            },
            {
                id: 3,
                firstName: "Third",
                lastName: "User",
                email: "third@mail.com",
                password: "1234567890",
                roles: [{ id: 2, name: "user", priority: 2 }],
            },
        ];
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find((user) => user.id === id);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map