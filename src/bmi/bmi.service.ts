import { Injectable } from '@nestjs/common';
import { BmiDto } from './dto/bmi.dto.js';

@Injectable()
export class BmiService {
    calculate(dto: BmiDto){
    return BmiDto
}
}