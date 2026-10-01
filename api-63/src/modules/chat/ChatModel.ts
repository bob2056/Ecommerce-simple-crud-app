import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/sql";

export interface IChatModel {
  id: string;
  sender: string;
  receiver: string;
  message?: string;
  file?: {
    url: string;
    path: string;
    filename: string;
    size: number;
    type: string;
  };
  status: string;
  deletedStatus?: string;
  messageId?: ChatModel;
  reactions?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export default class ChatModel extends Model<IChatModel> implements IChatModel {
  declare id: string;
  declare sender: string;
  declare receiver: string;
  declare message?: string;
  declare file?: {
    url: string;
    path: string;
    filename: string;
    size: number;
    type: string;
  };
  declare status: string;
  declare deletedStatus?: string;
  declare messageId?: ChatModel
  declare reactions?: string | null;
  declare createdAt?: Date;
  declare updatedAt?: Date
}

ChatModel.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT, // varchar 255
      allowNull: true,
    },
    file: {
      type: DataTypes.JSON, // string json
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "inactive", // active => unseen, inactive => read
    },
    deletedStatus: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    messageId: {
      type: DataTypes.UUID,
      references: {
        model: "messages",
        key: "id",
      },
      allowNull: true,
    }, // reply
    reactions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: Date.now(),
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: Date.now(),
    //   onUpdate: Date.now(),
    // },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    tableName: "messages",
    // modelName: "Chat"
  },
);


// const ChatModel = sequelize.define("Chat", {
//   // createdAt, updatedAt, deletdAt
// }, {
//   tableName: "messages",
//   timestamps: true,
//   // paranoid: true
// })

// export default ChatModel