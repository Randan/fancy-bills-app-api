export class CreateRatesDto {
  readonly rent: number;
  readonly coldWater: number;
  readonly hotWater: number;
  readonly sewerage: number;
  readonly electricityBelow: number;
  readonly electricityAbove: number;
}