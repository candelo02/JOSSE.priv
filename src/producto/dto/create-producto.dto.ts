import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    pro_nombre: string;

    @IsNumber()
    @IsNotEmpty()
    pro_precio: number;

    @IsNumber()
    @IsNotEmpty()
    pro_stock: number;

    @IsString()
    @IsNotEmpty()
    pro_categoria: string;

    @IsString()
    @IsNotEmpty()
    pro_proveedor: string;
}
