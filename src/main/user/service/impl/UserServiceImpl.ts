import { Service } from "typedi";
import { User } from "../../model/User";
import { UserService } from "../UserService";
import { userRepository } from "./../../repository/UserRepository";

@Service()
export class UserServiceImpl implements UserService {
  protected readonly userRepository = userRepository;

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
