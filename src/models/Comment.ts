import { database } from "../../config/database.js";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

// CREATE TABLE Comments
// (
//     id_comment  INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     body        TEXT                               NOT NULL,
//     id_user     INTEGER                            NOT NULL,
//     id_post     INTEGER,
//     id_response INTEGER,
//     FOREIGN KEY (id_user) REFERENCES Users (id_user),
//     FOREIGN KEY (id_post) REFERENCES Posts (id_post),
//     FOREIGN KEY (id_response) REFERENCES Comments (id_comment)
// );
export class PostComment extends Model<InferAttributes<PostComment>, InferCreationAttributes<PostComment>> {
  declare id_comment: CreationOptional<number>;
  declare body: string;
  declare id_user: number;
  declare id_post: CreationOptional<number>;
  declare id_response: CreationOptional<number>;
}

PostComment.init(
  {
    id_comment: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_post: {
      type: DataTypes.INTEGER,
    },
    id_response: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: database,
    timestamps: false,
    tableName: "Comment",
  }
);
