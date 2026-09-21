import { Injectable } from '@nestjs/common';
import { DiscDto } from './dto/discountcalc.dto.js';

@Injectable()
export class DiscountcalcService {
    calculate(dto: DiscDto){
        return DiscDto
    }
}
