import { Injectable } from '@nestjs/common';
import { TemperatureDto } from './dto/temperature.dto.js';

@Injectable()
export class TemperatureService {
    calculate(dto: TemperatureDto){
        return TemperatureDto
    }
}
