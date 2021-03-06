/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { BlogCommentEntity } from "src/entity/blog.comments.entity";
import { BlogEntity } from "src/entity/blog.entity";
import { UserEntity } from "src/entity/user.entity";

export const TypeORMConfiguration: TypeOrmModuleOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "Prajwal@23",
    "database": "emtec",
    "synchronize": false,
    "entities": [UserEntity, BlogEntity, BlogCommentEntity],
};
