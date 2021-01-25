import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RatesDocument = Rates & Document;

@Schema()
export class Rates {
  @Prop()
  title: string | null;

  @Prop()
  rent: number | null;

  @Prop()
  coldWater: number | null;

  @Prop()
  hotWater: number | null;

  @Prop()
  sewerage: number | null;

  @Prop()
  electricityBelow: number | null;

  @Prop()
  electricityAbove: number | null;
}

export const RatesSchema = SchemaFactory.createForClass(Rates);