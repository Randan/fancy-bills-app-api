import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { RatesService } from './rates.service';
import { CreateRatesDto } from './dto/create-rates.dto';
import { Rates } from './schemas/rates.schema';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  findAll(): Promise<Rates> {
    return this.ratesService.getAll();
  };

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createRatesDto: CreateRatesDto): Promise<Rates> {
    return this.ratesService.createAll(createRatesDto);
  }

  @Patch()
  @HttpCode(HttpStatus.OK)
  update(@Body() newRate): Promise<Rates> {
    return this.ratesService.update(newRate);
  }
}
