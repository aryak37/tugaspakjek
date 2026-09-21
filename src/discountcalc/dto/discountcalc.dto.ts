import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class DiscDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)

    price: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)

    discountPercent: number
}