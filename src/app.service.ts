import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTime(): string {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
  }
}
