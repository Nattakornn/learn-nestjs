import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      name: "oneblack",
      username: 'mark',
      password: 'ma1234',
    },
    {
      userId: 2,
      name: "twoblack",
      username: 'maria',
      password: 'ma2211',
    },
    {
      userId: 3,
      name: "threeblack",
      username: 'terdi',
      password: 'mo1231',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}