import {
  Body,
  Get,
  JsonController,
  Param,
  Patch,
  Post,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { UserServiceImpl } from "../service/impl/UserServiceImpl";
import { User } from "./../model/User";

@JsonController("/users")
@Service()
export class UserController {
  @Inject()
  private readonly userService!: UserServiceImpl;

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get("/:id")
  getUserById(@Param("id") id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Post()
  saveOne(@Body() user: User) {
    return this.userService.saveUser(user);
  }

  @Patch("/:id")
  patchUserById(@Param("id") id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }
}
