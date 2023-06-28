import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateBmwDto } from "./dtos/create-bmw.dto";

@Controller("bike")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get("r1250rs")
  introduceR1250RS(): string {
    return this.appService.introduceR1250RS();
  }
  @Get("modified")
  @Header("Cache-Control", "none")
  @HttpCode(222)
  requestExample(@Query() query: { what: string }): string {
    return `example with excess request Object ${query.what}`;
  }

  @Get("rqObj")
  wildCard(@Req() requestObj: Request): string {
    return `wildCard Endpoint${JSON.stringify(requestObj.text)}`;
  }
  @Post()
  async create(@Body() bmwObj: CreateBmwDto) {
    return "This action adds a new cat";
  }

  @Get(":id")
  findOne(@Param() params: any): string {
    return `dyanamic route parameter ! -  #${params.id}`;
  }
}
