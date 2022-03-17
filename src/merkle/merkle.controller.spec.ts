import { Test, TestingModule } from '@nestjs/testing';
import { MerkleController } from './merkle.controller';

describe('MerkleController', () => {
  let controller: MerkleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerkleController],
    }).compile();

    controller = module.get<MerkleController>(MerkleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
