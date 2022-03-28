import { Injectable } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class UserService {
  users: User[] = [
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

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
