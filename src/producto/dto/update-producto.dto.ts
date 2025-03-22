import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class UpdateProductoDto {




    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    pro_nombre?: string;

    @IsNumber()
    @IsNotEmpty()
    pro_precio?: number;

    //categoria
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    pro_categoria?: string;

    @IsNumber()
    @IsNotEmpty()
    pro_stock?: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 255)
    pro_descripcion?: string;

    @IsNumber()
    @IsNotEmpty()
    pro_proveedor?: string;

}