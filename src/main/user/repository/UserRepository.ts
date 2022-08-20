import { Repository } from "typeorm";
import { AppDataSource } from "../../../resources/data-source";
import { User } from "../model/User";

export const userRepository: Repository<User> =
  AppDataSource.getRepository(User);
