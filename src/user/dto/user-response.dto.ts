import { Expose } from "class-transformer";
import { Role } from "../entities/user.entity";

export class UserDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  password: string;

  @Expose()
  roles: Role[];
}
