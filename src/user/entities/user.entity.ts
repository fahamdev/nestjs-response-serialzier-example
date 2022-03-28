export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  priority: number;
}
