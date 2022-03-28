import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { SerializeResponse } from "src/interceptor/serialize-response.interceptor";
import { partialUserDto } from "src/user/dto/partial-user-response.dto";
import { UserDto } from "src/user/dto/user-response.dto";
import { ModifiedUserDto } from "src/user/dto/user-modified-response.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @SerializeResponse(partialUserDto)
  @ApiTags(`Get all Users`)
  @ApiOperation({
    summary: "Returns partial(firstName, lastName and email) User Objects",
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get("whole")
  @ApiTags(`Get all Users`)
  @ApiOperation({ summary: "Returns whole user objects" })
  @SerializeResponse(UserDto)
  findAllWithPassword() {
    return this.userService.findAll();
  }

  @Get("modified")
  @ApiTags(`Get all Users`)
  @ApiOperation({
    summary:
      "Returns modified(role name instead of whole role object) user objects",
  })
  @SerializeResponse(ModifiedUserDto)
  findAllModified() {
    return this.userService.findAll();
  }

  @Get(":id")
  @ApiTags(`Get Single User by ID`)
  @ApiOperation({
    summary: "Returns partial(firstName, lastName and email) User Object by ID",
  })
  @SerializeResponse(partialUserDto)
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Get(":id/whole")
  @ApiTags(`Get Single User by ID`)
  @ApiOperation({ summary: "Returns whole user object by ID" })
  @SerializeResponse(UserDto)
  findOneWithPassword(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @Get(":id/modified")
  @ApiTags(`Get Single User by ID`)
  @ApiOperation({
    summary:
      "Returns modified(role name instead of whole role object) user object by ID",
  })
  @SerializeResponse(ModifiedUserDto)
  findModifiedOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }
}
