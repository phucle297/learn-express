import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "mysql",
  logging: true,
  database: "to-do-list",
  port: 3308,
  host: "localhost",
  username: "root",
  password: "",
  synchronize: true,
  entities: [__dirname + "/../entity/*{.ts,.js}"],
});
