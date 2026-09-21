import { Controller, Post, Body } from '@nestjs/common';
import { BmiService } from './bmi.service.js';
import { BmiDto } from './dto/bmi.dto.js'

@Controller('bmi')
export class BmiController {
  constructor(private readonly bmiService: BmiService) {}
  @Post('bmi')
calculateBmi(@Body() dto: BmiDto) {
  const heightM = dto.heightCm / 100;
  const bmi = Number((dto.weightKg / heightM ** 2).toFixed(2));
  let status = 'Normal';
  if (bmi < 18.5) status = 'Underweight';
  else if (bmi >= 25 && bmi < 30) status = 'Overweight';
  else if (bmi >= 30) status = 'Obese';
  return { message: 'BMI calculated', data: { ...dto, bmi, status } };
}
}
