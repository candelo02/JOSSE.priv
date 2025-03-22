import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';
import { CreateProductoDto } from 'src/producto/dto/create-producto.dto';
import { UpdateProductoDto } from 'src/producto/dto/update-producto.dto';
import { ProductoEntity } from 'src/producto/entity/producto.entity';
import { Not, Repository } from 'typeorm';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity)
        private readonly productoRepository: Repository<ProductoEntity>,
    ) { }

    // Listar productos
    async getAllProductos(): Promise<ProductoEntity[]> {
        try {
            const productos = await this.productoRepository.find();
            if (!productos.length) {
                throw new NotFoundException(new MessageDto('No hay productos registrados'));
            }
            return productos;
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto('Error en el servidor'));
        }
    }

    // Encontrar producto por ID
    async getProductoById(pro_id: number): Promise<ProductoEntity> {
        try {
            const producto = await this.productoRepository.findOne({ where: { pro_id } });
            if (!producto) {
                throw new NotFoundException(new MessageDto('Producto no encontrado'));
            }
            return producto;
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto('Error en el servidor'));
        }
    }

    // Crear producto
    async createProducto(dto: CreateProductoDto): Promise<ProductoEntity> {
        try {
            const { pro_nombre } = dto;

            // Verificar si el producto ya existe
            const existe = await this.productoRepository.findOne({ where: { pro_nombre } });
            if (existe) {
                throw new BadRequestException(new MessageDto('El producto ya existe'));
            }

            const product = this.productoRepository.create(dto);
            return await this.productoRepository.save(product);
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto('Error en el servidor'));
        }
    }

    // Actualizar producto
    async updateProducto(pro_id: number, dto: UpdateProductoDto): Promise<ProductoEntity> {
        try {
            const producto = await this.productoRepository.findOne({ where: { pro_id } });

            if (!producto) {
                throw new NotFoundException(new MessageDto('Producto no encontrado'));
            }

            // Verificar si el nuevo nombre ya está en uso por otro producto
            if (dto.pro_nombre) {
                const exists = await this.productoRepository.findOne({
                    where: { pro_nombre: dto.pro_nombre, pro_id: Not(pro_id) }
                });

                if (exists) {
                    throw new BadRequestException(new MessageDto('El producto ya existe'));
                }
            }

            // Actualizar los valores solo si se envían en el DTO
            producto.pro_nombre = dto.pro_nombre ?? producto.pro_nombre;
            producto.pro_precio = dto.pro_precio ?? producto.pro_precio;
            producto.pro_stock = dto.pro_stock ?? producto.pro_stock;
            producto.pro_categoria = dto.pro_categoria ?? producto.pro_categoria;
            producto.pro_descripcion = dto.pro_descripcion ?? producto.pro_descripcion;
            producto.pro_proveedor = dto.pro_proveedor ?? producto.pro_proveedor
            



            return await this.productoRepository.save(producto);
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto('Error en el servidor'));
        }
    }

    // Eliminar producto
    async deleteProducto(pro_id: number): Promise<MessageDto> {
        try {
            const producto = await this.productoRepository.findOne({ where: { pro_id } });

            if (!producto) {
                throw new NotFoundException(new MessageDto('Producto no encontrado'));
            }

            await this.productoRepository.remove(producto);
            return new MessageDto('Producto eliminado correctamente');
        } catch (error) {
            throw new InternalServerErrorException(new MessageDto('Error en el servidor'));
        }
    }
}
