import { Body, Controller, Get, Req, Post, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { CreateMerkleDto } from './create-merkle.dto';
import { getWhitelist } from './merkle';

@Controller('merkle')
export class MerkleController {
  @Post()
  async create(@Body() leaves: string[]) {
      const merkle = getWhitelist(leaves)
  return merkle;
}
  @Get()
  @HttpCode(200)
  findAll(@Req() request: Request): string {
    return 'This action returns all leaves';
  }
}
