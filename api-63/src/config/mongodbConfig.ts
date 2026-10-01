// import dns from "dns";
// dns.setServers(['8.8.8.8','8.8.4.4'])

import mongoose from "mongoose";
import { mongoConfig } from "./AppConfig";

// const initMongo = async () => {
//   try {
//     await mongoose.connect(mongoConfig.url as string, {
//       dbName: mongoConfig.dbName,
//       autoCreate: true,
//       autoIndex: true,
//     });
//     console.log("***** Mongodb Connected Successfully *****");
//   } catch (exception) {
//     console.error("***** Error while connecting mongodb Server *****");
//     console.error(exception);
//     process.exit(1);
//   }
// };

// IIFE

(async () => {
  try {
    await mongoose.connect(mongoConfig.url as string, {
      dbName: mongoConfig.dbName,
      autoCreate: true,
      autoIndex: true,
    });
    console.log("***** Mongodb Connected Successfully *****");
  } catch (exception) {
    console.error("***** Error while connecting mongodb Server *****");
    console.error(exception);
    process.exit(1);
  }
})();