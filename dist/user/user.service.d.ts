import { User } from "src/user/entities/user.entity";
export declare class UserService {
    users: User[];
    findAll(): User[];
    findOne(id: number): User;
}
