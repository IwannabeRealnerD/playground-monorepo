import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AnotherController } from "./another/another.controller";

@Module({
  imports: [],
  controllers: [AppController, AnotherController],
  providers: [AppService],
})
export class AppModule {}
