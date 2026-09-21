import { Injectable } from '@nestjs/common';
import { GeometryDto } from './dto/geometry.dto.js';

@Injectable()
export class GeometryService {
    countCircleArea(dto: GeometryDto){
        return {
            message: "Circle area calculated",
            data: {
                radius: dto.radius,
                area:Math.round( Math.PI * dto.radius * dto.radius)
            }
        }
    }
}
