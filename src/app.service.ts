import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Aryak!';
  }

  getcats(): string {
    return 'KrisBlack'
  }

  getNama(name : string): string{
    return 'Hello ' + name;
  }

  getUmur(umur : number): string{
    let kategori : string = ''
    if (umur < 5) {
      kategori = 'Balita'
    } else if (umur < 13){
      kategori = 'Anak-anak'
    } else if (umur < 17){
      kategori = 'Remaja'
    } else if (umur < 60){
      kategori = 'Dewasa'
    } else {
      kategori = 'Lansia'
    }
    return 'Kategori ' + kategori;
  }
}
