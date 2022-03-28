import { Role } from "../entities/user.entity";
export declare class UserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: Role[];
}
