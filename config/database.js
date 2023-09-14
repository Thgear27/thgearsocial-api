import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./config.js";

export const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mariadb",
});

try {
  await database.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
