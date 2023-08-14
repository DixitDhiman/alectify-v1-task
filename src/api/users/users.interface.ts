import User from "./entities/user.entity";

export interface IUsersService {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  create(user: Partial<User>): Promise<User>;
  update(id: string, user: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
}