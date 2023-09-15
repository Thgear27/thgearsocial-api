import { database } from "../../config/database";
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { User } from "./User.js";

export class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
  declare id_post: CreationOptional<number>;
  declare body: string;
  declare likes: CreationOptional<number>;
  declare created_at: CreationOptional<Date>;
  declare id_user: ForeignKey<User["id_user"]>;
}

Post.init(
  {
    id_post: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    timestamps: false,
    tableName: "Post",
  }
);
