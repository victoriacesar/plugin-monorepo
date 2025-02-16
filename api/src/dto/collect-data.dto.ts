import { IsString, IsUrl, IsNumber } from 'class-validator';

export class CollectDataDto {
  @IsString()
  device: string;

  @IsString({ message: "O campo 'os' deve ser uma string" })
  os: string;

  @IsString({ message: "O campo 'origin' deve ser uma URL válida" })
  origin: string;

  @IsNumber({}, { message: "O campo 'themeSwitchCount' deve ser um número" })
  themeSwitchCount: number;
}
