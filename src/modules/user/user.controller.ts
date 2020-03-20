import { Controller, Get, Post, HttpStatus, Res, Param, Req, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Response, Request, request } from 'express';

@Controller('users')
export class UserController {

  constructor(private userService: UserService) { }

  @Get()
  getAllUsers(@Res() response: Response, @Req() request: Request) {
    //url拼接参数，在request.query里
    this.userService.find().then(users => {
      response.status(HttpStatus.OK).json(users);
    });
  }

  @Get('/:id')
  getUserById(@Res() response: Response, @Req() request: Request, @Param() id: string) {
    //id在params里面
    this.userService.getUserById(id).then(user => {
      response.status(HttpStatus.OK).json(user);
    });
  }

  @Post()
  addUser(@Res() response: Response, @Body() user: User) {
    //postman状态栏nest返回时显示 status：201 created
    this.userService.persisitUser(user).then(user => {
      response.status(HttpStatus.OK).json(user)
    })
  }
}