import { IsNotEmpty, IsNumber, Min, Max, IsEnum } from "class-validator";

export enum TemperatureType {
    CELCIUS = "CELCIUS",
    FARENHEIT = "FARENHEIT"
}

export class TemperatureDto {
    @IsNotEmpty()
    @IsNumber()

    value: number

    @IsNotEmpty()
    @IsEnum(TemperatureType)

    from: TemperatureType

    @IsNotEmpty()
    @IsEnum(TemperatureType)

    to: TemperatureType
}
