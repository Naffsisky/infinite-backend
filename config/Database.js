import { Sequelize } from "sequelize";

const db = new Sequelize("freedb_db_shop", "freedb_deklan", "hGf4PJdCJ9C%v$4", {
  host: "sql.freedb.tech",
  dialect: "mysql",
});

export default db;
