import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { MessageDto } from 'src/common/message.dto';
import { CreateProductoDto } from 'src/producto/dto/create-producto.dto';
import { UpdateProductoDto } from 'src/producto/dto/update-producto.dto';
import { ProductoEntity } from 'src/producto/entity/producto.entity';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(
        private readonly productoService: ProductoService,
    ) { }

    // Obtener todos los productos
    @Get()
    async getAllProductos(): Promise<ProductoEntity[]> {
        return this.productoService.getAllProductos();
    }

    // Obtener producto por ID
    @Get(':pro_id')
    async getProductoById(@Param('pro_id') pro_id: number): Promise<ProductoEntity> {
        return this.productoService.getProductoById(pro_id);
    }

    // Crear producto
    @Post()
    async createProducto(@Body() dto: CreateProductoDto): Promise<ProductoEntity> {
        return this.productoService.createProducto(dto);
    }

    // Actualizar producto
    @Put(':pro_id')
    async updateProducto(
        @Param('pro_id') pro_id: number,
        @Body() dto: UpdateProductoDto
    ): Promise<ProductoEntity> {
        return this.productoService.updateProducto(pro_id, dto);
    }

    // Eliminar producto
    @Delete(':pro_id')
    async deleteProducto(@Param('pro_id') pro_id: number): Promise<MessageDto> {
        return this.productoService.deleteProducto(pro_id);
    }
}

