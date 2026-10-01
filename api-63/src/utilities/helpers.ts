import { appConfig } from "../config/AppConfig";

export function mapImage(image: Express.Multer.File, dir: string) {
  return {
    url: appConfig.imagePath + dir + image?.filename,
    path: image?.destination,
    filename: image?.filename,
    size: image?.size,
    type: image?.mimetype,
  };
}

export function randomString(len=100) {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ"
  let random = "";
  const length = chars.length
  for(let i = 1; i <= len; i++) {
    let posn = Math.ceil(Math.random() * (length-1))      // 0 index upto Z index
    random += chars[posn]
  }
  return random;
}