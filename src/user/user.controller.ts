import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from '../schemas/user.schema';
import { createuserDTO } from '../dto/createuser.dto';
import { Post,Body,Get,Param,Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    async create(@Body()CreateUserDto:createuserDTO){
        await this.userService.create(CreateUserDto);
    }

    @Get()
    async findall():Promise<user[]>{
        return await this.userService.findall();
    }

    @Get(':id')
    async findone(@Param('id')id:string):Promise<user>{
        return this.userService.findone(id);
    }

    @Delete(":id")
    async remove(@Param('id')id:string){
        return this.userService.delete(id);
    }

}
