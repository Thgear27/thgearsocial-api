import { database } from "../../config/database.js";
import { DataTypes } from "sequelize";

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

export const Comment = database.define(
  "Comment",
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
    timestamps: false,
  }
);
