import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'producto' })
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    pro_id: number;

    @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
    pro_nombre: string; 

    @Column({ type: 'varchar', length: 100 })
    pro_descripcion: string;

    @Column({ type: 'float', nullable: false })
    pro_precio: number;

    @Column({ type: 'int', nullable: false })
    pro_stock: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    pro_categoria: string;

    @Column({ type: 'varchar', length: 50, nullable: false })
    pro_proveedor: string;
}

