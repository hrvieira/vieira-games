import { IsNotEmpty } from "class-validator";
import { Produtos } from "src/produtos/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categorias{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    tipo: string

    @OneToMany(() => Produtos, (produtos) => produtos.categorias)
    produtos: Produtos[];
    
}