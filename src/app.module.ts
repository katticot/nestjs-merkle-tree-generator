import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerkleController } from './merkle/merkle.controller';

@Module({
  imports: [],
  controllers: [AppController, MerkleController],
  providers: [AppService],
})
export class AppModule {}
