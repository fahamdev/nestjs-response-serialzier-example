import { Exclude, Expose, Transform } from "class-transformer";
import { Role } from "../entities/user.entity";

export class ModifiedUserDto {
  @Expose()
  email: string;

  @Exclude()
  firstName: string;

  @Exclude()
  lastName: string;

  @Expose()
  @Transform((roles) => roles.value.map((role: Role) => role.name))
  roles: Role[];
}
