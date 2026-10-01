import { config } from "dotenv";
config()

export const appConfig = {
  imagePath: process.env.IMAGE_BASE_PATH,
  jwtSecret: process.env.JWT_SECRET, 
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET
};

export const mongoConfig = {
  url: process.env.MONGODB_URL,
  dbName: process.env.DB_NAME || 'api-63'
};

export const smtpConfig = {
  service: process.env.SMTP_SERVICE,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  fromAddress: process.env.FROM_ADDRESS
};

export const GeminiAI = {
  apikey: process.env.GEMINI_API_KEY,
};

export const sqlConfig = {
  url: process.env.SQL_DB_URL,
  dialect: process.env.SQL_DB_DIALECT
};