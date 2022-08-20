import { Get, JsonController, Param } from "routing-controllers";
import { Inject, Service } from "typedi";
import { UserServiceImpl } from "../service/impl/UserServiceImpl";

@JsonController("/users")
@Service()
export class UserController {
  @Inject()
  userService!: UserServiceImpl;

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get("/:id")
  getUserById(@Param("id") id: number) {
    return this.userService.getUserById(id);
  }
}
