import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRatesDto } from './dto/create-rates.dto';
import { Rates, RatesDocument } from './schemas/rates.schema';

@Injectable()
export class RatesService {
  constructor(@InjectModel(Rates.name) private ratesModel: Model<RatesDocument>) {}

  async getAll(): Promise<Rates> {
    return this.ratesModel.findOne().exec();
  }

  async createAll(createRatesDto: CreateRatesDto): Promise<Rates> {
    const newRates = new this.ratesModel(createRatesDto);
    return newRates.save();
  }

  async update(newRate: any): Promise<Rates> {
    return this.ratesModel.findOneAndUpdate(
      { title: '__rates' },
      newRate,
      { new: true }
    );
  }
}
