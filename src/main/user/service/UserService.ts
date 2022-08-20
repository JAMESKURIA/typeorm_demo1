import { User } from "../model/User";
export interface UserService {
  getUsers(): Promise<User[]>;

  getUserById(id: number): Promise<User | null>;
}
