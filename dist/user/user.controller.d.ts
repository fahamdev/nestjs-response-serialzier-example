import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): import("./entities/user.entity").User[];
    findAllWithPassword(): import("./entities/user.entity").User[];
    findAllModified(): import("./entities/user.entity").User[];
    findOne(id: string): import("./entities/user.entity").User;
    findOneWithPassword(id: string): import("./entities/user.entity").User;
    findModifiedOne(id: string): import("./entities/user.entity").User;
}
