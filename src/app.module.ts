import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { BmiModule } from './bmi/bmi.module.js';
import { DiscountcalcModule } from './discountcalc/discountcalc.module.js';
import { ScoreModule } from './score/score.module.js';
import { TemperatureModule } from './temperature/temperature.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'toko-buku-api',
    }),
    GeometryModule,
    BmiModule,
    DiscountcalcModule,
    ScoreModule,
    TemperatureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
