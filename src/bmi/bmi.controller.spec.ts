import { Test, TestingModule } from '@nestjs/testing';
import { BmiController } from './bmi.controller.js';
import { BmiService } from './bmi.service.js';

describe('BmiController', () => {
  let controller: BmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BmiController],
      providers: [BmiService],
    }).compile();

    controller = module.get<BmiController>(BmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
