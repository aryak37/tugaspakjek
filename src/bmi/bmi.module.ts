import { Module } from '@nestjs/common';
import { BmiService } from './bmi.service.js';
import { BmiController } from './bmi.controller.js';

@Module({
  controllers: [BmiController],
  providers: [BmiService],
})
export class BmiModule {}
