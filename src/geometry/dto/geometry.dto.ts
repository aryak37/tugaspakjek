import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class GeometryDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    
    radius: number = 3.14
}