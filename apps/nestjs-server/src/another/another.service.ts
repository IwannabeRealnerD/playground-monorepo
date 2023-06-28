import { Injectable } from "@nestjs/common";

import { AnotherInterface } from "@/interfaces/another.interface";

// Nest IOC 컨트롤러에게 "injcetable"이라고 알려주는 데코레이터
@Injectable()
export class AnotherService {
  private readonly another: AnotherInterface[] = [];

  create(cat: AnotherInterface) {
    this.another.push(cat);
  }

  findAll(): AnotherInterface[] {
    return this.another;
  }
}
