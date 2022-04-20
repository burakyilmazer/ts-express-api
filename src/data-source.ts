import { DataSource } from "typeorm";
import {User} from './entity/User';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "asus",
  password: "null",
  database: "TSExample",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

export const db = {
  User: AppDataSource.getRepository(User)
}