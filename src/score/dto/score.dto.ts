import { IsNotEmpty, IsNumber, Min, Max } from "class-validator";

export class GradeDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(100)

    score: number
}