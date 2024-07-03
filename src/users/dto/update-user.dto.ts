import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";

// PartialType was the Optional 
export class UpdateUserDto extends PartialType(CreateUserDto){}