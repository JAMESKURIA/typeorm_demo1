import { AppDataSource } from "../../../resources/data-source";
import { User } from "../model/User";

export const userRepository = AppDataSource.getRepository(User);
