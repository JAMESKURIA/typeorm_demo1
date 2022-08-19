import { Service } from "typedi";
import { User } from "../../model/User";
import { userRepository } from "../../repository/UserRepository";
import { UserService } from "../UserService";

@Service()
export class UserServiceImpl implements UserService {
  public async getUsers(): Promise<User[]> {
    return await userRepository.find();
  }
}
