import { Controller, Get } from "@nestjs/common";

@Controller("another")
export class AnotherController {
  @Get()
  introducingAnotherController(): string {
    return "This is another controller";
  }
}
