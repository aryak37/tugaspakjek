import { Controller, Post, Body } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureDto, TemperatureType } from './dto/temperature.dto.js';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}
  @Post('temperature')
convertTemperature(@Body() dto: TemperatureDto) {
  let result = dto.value;
  if (dto.from === TemperatureType.CELCIUS && dto.to === TemperatureType.FARENHEIT) {
    result = (dto.value * 9) / 5 + 32;
  } else if (dto.from === TemperatureType.FARENHEIT && dto.to === TemperatureType.CELCIUS) {
    result = ((dto.value - 32) * 5) / 9;
  }
  return {
    message: 'Temperature converted',
    data: {
      input: { value: dto.value, unit: dto.from },
      output: { value: Number(result.toFixed(2)), unit: dto.to },
    },
  };
}
}
