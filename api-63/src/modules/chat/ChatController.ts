import {GoogleGenAI} from "@google/genai";

import {type Request, type NextFunction, type Response } from "express";
import { GeminiAI } from "../../config/AppConfig";
import UserModel from "../user/UserModel";
import ChatModel from "./ChatModel";
import { Op } from "sequelize";
import { mapImage } from "../../utilities/helpers";

export default class ChatController {
  async chatWithGemini(req: Request, res: Response, next: NextFunction) {
    try {
      const { question } = req.body;

      const ai = new GoogleGenAI({
        apiKey: GeminiAI.apikey,
      });

      // ai.interactions.create()
      // ai.models.generateContent()
      // ai.agents.create()

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: question,
      });

      console.log(response);

      res.json({
        data: response.text,
        message: "AI Response",
        meta: null,
      });
    } catch (exception) {
      console.error(exception);
      next(exception);
    }
  }

  async getChatWithUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const userDetail = await UserModel.findById(userId, {
        password: 0,
        activationToken: 0,
        __v: 0,
      });
      if (!userDetail) {
        throw { code: 422, message: "User not found" };
      }
      const loggedInUser = req.loggedInUser;

      const page = Number(req.query.page || 1);
      const limit = Number(req.query.limit || 50);
      const skip = (page - 1) * limit;
      let filter = {
        [Op.or]: [
          {
            [Op.or]: [
              { sender: loggedInUser?._id.toString() },
              { receiver: userId },
            ],
          },
          {
            [Op.or]: [
              { receiver: loggedInUser?._id.toString() },
              { sender: userId },
            ],
          },
        ],
      };

      // if

      const { rows, count } = await ChatModel.findAndCountAll({
        // include: [],
        where: filter,
        order: [
          ["createdAt", "desc"],
          ["id", "desc"],
        ],
        // having: {},
        offset: skip,
        limit: limit,
      });
      res.json({
        data: rows,
        message: "Your chat Detail",
        meta: {
          pagination: {
            page: page,
            limit: limit,
            total: count,
            totalPages: Math.ceil(count / limit),
          },
        },
      });
    } catch (exception) {
      next(exception);
    }
  }

  async sendChatMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const sender = req.loggedInUser;
      data.sender = sender?._id.toString();

      // if file upload
      if (req.files && req.files.length) {
        let fileUploaded = [];
        for (let file of req.files as Array<Express.Multer.File>) {
          fileUploaded.push(mapImage(file, "chat/"));
        }
        data.file = fileUploaded;
      }

      const message = await ChatModel.create(data);
      res.json({
        data: message,
        message: "Chat Data Send",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  }

  async updateChatMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      // /chat/:chatId
      const chatId = req.query.chatId;
      const sender = req.loggedInUser;

      const chatDetail = await ChatModel.findOne({
        where: {
          id: chatId?.toString(),
          sender: sender?._id.toString(),
        },
      });
      if (!chatDetail) {
        throw { code: 422, message: "Chat not found" };
      }

      data.sender = sender?._id.toString();

      // if file upload
      if (req.files && req.files.length) {
        let fileUploaded = [];
        for (let file of req.files as Array<Express.Multer.File>) {
          fileUploaded.push(mapImage(file, "chat/"));
        }
        data.file = fileUploaded;
      }

      chatDetail.message = data.message;
      chatDetail.file = data.file ?? chatDetail.file;
      chatDetail.status = "active";
      chatDetail.reactions = data.reactions ?? null;

      await chatDetail.save(); //

      // await ChatModel.update(data, {
      //   where: {id: chatDetail.id}
      // })

      res.json({
        data: chatDetail,
        message: "Chat Data Send",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  }

  async deleteChatMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      // /chat/:chatId
      const chatId = req.query.chatId;
      const sender = req.loggedInUser;

      const chatDetail = await ChatModel.findOne({
        where: {
          id: chatId?.toString(),
          sender: sender?._id.toString(),
        },
      });
      if (!chatDetail) {
        throw { code: 422, message: "Chat not found" };
      }
      // file delete 
      // if(chatDetail.file) {
      //   for(let file of chatDetail.file as unknown as  Array<{path: string, filename: string}>) {
      //     fs.unlinkSync(file.path+file.filename)
      //   }
      // }
      // dleete 
      await ChatModel.destroy({
        where: {
          id: chatDetail.id,
        },
      });
      res.json({
        data: chatDetail,
        message: "Chat Data Send",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  }
}