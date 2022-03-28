import { Expose } from 'class-transformer';

export class partialUserDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;
}
