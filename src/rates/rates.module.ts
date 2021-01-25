import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RatesController } from './rates.controller';
import { RatesService } from './rates.service';
import { Rates, RatesSchema } from './schemas/rates.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Rates.name, schema: RatesSchema}])],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
