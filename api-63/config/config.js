require("dotenv").config();

const commonConfig= {
  dialect: "postgres",
  // 
  dialectOptions: {
    ssl: {
      require: true
    }
  }
}
module.exports = {
  development: {
    ...commonConfig,
    url: process.env.SQL_DB_URL,
    // host, user, pass, dbName, port, 
  },
  test: {
    ...commonConfig,
    url: process.env.SQL_DB_URL,
    // host, user, pass, dbName, port, 
  },
  production: {
    ...commonConfig,
    url: process.env.SQL_DB_URL,
    // host, user, pass, dbName, port, 
  }
}