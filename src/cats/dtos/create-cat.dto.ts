import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
    id : string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsNotEmpty()
    breed: string;
  }