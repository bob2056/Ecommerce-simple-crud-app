import { Router } from "express";
import ChatController from "./ChatController";
import Auth from "../../middlewares/AuthMiddleware";
import bodyValidator from "../../middlewares/BodyValidationMiddleware";
import { GeminiQueryDTO, SendMessageDTO } from "./ChatDto";
import uploader from "../../middlewares/UploaderMiddleware";

const chatCtrl = new ChatController();
const chatRouter = Router()

// with gemini 
chatRouter.post('/with-gemini', Auth(), bodyValidator(GeminiQueryDTO), chatCtrl.chatWithGemini )

chatRouter.get("/:userId", Auth(), chatCtrl.getChatWithUser)
chatRouter.post("/", Auth(), uploader('/chat').array('file'), bodyValidator(SendMessageDTO), chatCtrl.sendChatMessage)

export default chatRouter