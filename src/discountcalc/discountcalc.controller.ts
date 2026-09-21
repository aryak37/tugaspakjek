import { Controller, Post, Body } from '@nestjs/common';
import { DiscountcalcService } from './discountcalc.service.js';
import { DiscDto } from './dto/discountcalc.dto.js';

@Controller('discountcalc')
export class DiscountcalcController {
  constructor(private readonly discountcalcService: DiscountcalcService) {}
  @Post('discount')
calculateDiscount(@Body() dto: DiscDto) {
  const saved = dto.price * (dto.discountPercent / 100);
  return {
    message: 'Discount calculated',
    data: {
      originalPrice: dto.price,
      discountPercent: dto.discountPercent,
      savedAmount: Number(saved.toFixed(0)),
      finalPrice: Number((dto.price - saved).toFixed(0)),
    },
  };
}
}
