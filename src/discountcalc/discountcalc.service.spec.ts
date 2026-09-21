import { Test, TestingModule } from '@nestjs/testing';
import { DiscountcalcService } from './discountcalc.service.js';

describe('DiscountcalcService', () => {
  let service: DiscountcalcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountcalcService],
    }).compile();

    service = module.get<DiscountcalcService>(DiscountcalcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
