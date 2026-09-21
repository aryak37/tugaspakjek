import { Module } from '@nestjs/common';
import { DiscountcalcService } from './discountcalc.service.js';
import { DiscountcalcController } from './discountcalc.controller.js';

@Module({
  controllers: [DiscountcalcController],
  providers: [DiscountcalcService],
})
export class DiscountcalcModule {}
