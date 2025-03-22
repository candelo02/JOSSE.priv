import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constans';
import { ProductoModule } from './producto/producto.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './producto/producto.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get(DB_HOST),
        port: +configService.get(DB_PORT),
        username: configService.get(DB_USER),
        password: configService.get(DB_PASSWORD),
        database: configService.get(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false, // Desactivado para evitar la recreación de tablas existentes
        logging: true,
        migrationsRun: false,
      }),
      inject: [ConfigService],
    }),
    ProductoModule,
  ],
  controllers: [AppController, ProductoController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
