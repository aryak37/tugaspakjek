import { Controller, Post, Body } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { GeometryDto } from './dto/geometry.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}
  @Post('circle-area')
  getCircleArea(@Body() dto: GeometryDto){
    return this.geometryService.countCircleArea(dto)
  }
}