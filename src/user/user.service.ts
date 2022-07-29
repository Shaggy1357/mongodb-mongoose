import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { user, UserDocument } from '../schemas/user.schema';
import { createuserDTO } from '../dto/createuser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(user.name) private userModel:Model<UserDocument>){}

    async create(CreateuserDTO:createuserDTO):Promise<user>{
        const created = await this.userModel.create(CreateuserDTO);
        return created;
    }

    async findall():Promise<user[]>{
        // console.log(await this.userModel.find().exec());
        console.log("harsh");
        
        return await this.userModel.find().exec();
    }

    async findone(id:string):Promise<user>{
        const response = this.userModel.findOne({_id:id});
        return response;
    }

    async delete(id:string){
        const response = await this.userModel.findByIdAndRemove({_id:id}).exec();
        return response;
    }
}
