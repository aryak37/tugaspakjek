import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('KrisReng')
  getcats(): string {
    return this.appService.getcats();
  }

  @Get('name/:name')
  getNama(@Param('name') name: string): string{
    return this.appService.getNama(name);
  }

  @Get('umur')
  getUmur(@Query('umur') umur: number): string{
    return this.appService.getUmur(umur);
  }
}