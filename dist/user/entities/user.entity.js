"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const openapi = require("@nestjs/swagger");
class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, roles: { required: true, type: () => [Object] } };
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map