import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  introduceR1250RS(): string {
    return "Sports Tourer model of BMW Motorrad";
  }
  anotherEndpoint(): string {
    return "Another endpoint";
  }
}
