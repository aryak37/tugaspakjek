import { Test, TestingModule } from '@nestjs/testing';
import { DiscountcalcController } from './discountcalc.controller.js';
import { DiscountcalcService } from './discountcalc.service.js';

describe('DiscountcalcController', () => {
  let controller: DiscountcalcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountcalcController],
      providers: [DiscountcalcService],
    }).compile();

    controller = module.get<DiscountcalcController>(DiscountcalcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
