import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class BmiDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    
    heightCm: number
    
    @IsNotEmpty()
    @IsNumber()
    @Min(1)

    weightKg: number
}