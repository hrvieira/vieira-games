import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias } from './categorias/entities/categorias.entity';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';
import { Produtos } from './produtos/entities/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_vieira_games',
      entities: [Categorias, Produtos],
      synchronize: true,
    }),
    CategoriasModule,
    ProdutosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
