import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Categorias } from 'src/categorias/entities/categorias.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_produtos" })
export class Produtos{

    @PrimaryGeneratedColumn()
    id: number;

    @Transform(({value}: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;

    @Transform(({value}: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string;

    @Transform(({value}: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({length: 500, nullable: false})
    foto: string;

    @IsNotEmpty()
    @Column({nullable: false})
    preco: number;

    @ManyToOne(() => Categorias, (categorias) => categorias.produtos, {
        onDelete: "CASCADE"
    })
    categorias: Categorias;
    
}