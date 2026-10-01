import { Sequelize } from "sequelize";
import { sqlConfig } from "./AppConfig";

const sequelize = new Sequelize(sqlConfig.url as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true
    }
  }
});

// // IIFE
// (async() => {
//   try {
//     await sequelize.authenticate()
//     console.log("********* SQL DB CONNECTED *********")
//   } catch(exception) {
//     console.error("Error while connecting SQL DB", exception)
//     process.exit(1)
//   }
// })();


export default sequelize