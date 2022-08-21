import { validateOrReject } from "class-validator";
import { Service } from "typedi";
import { User } from "../../model/User";
import { UserService } from "../UserService";
import { UserRepository } from "./../../repository/UserRepository";

@Service()
export class UserServiceImpl implements UserService {
  protected readonly userRepository = UserRepository;

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async saveUser(user: User): Promise<User> {
    let savedUser: any;

    try {
      await validateOrReject(user);
      console.log("Validation passed!");

      savedUser = await this.userRepository.save(user);
    } catch (errors) {
      console.log(
        "Caught promise rejection (validation failed). Errors: ",
        errors
      );
    }

    return savedUser;
  }
}
