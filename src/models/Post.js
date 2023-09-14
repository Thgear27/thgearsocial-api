import { database } from "../../config/database.js";
import { DataTypes } from "sequelize";

// CREATE TABLE Posts
// (
//     id_post    INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     body       TEXT                               NOT NULL,
//     likes      INTEGER                                     DEFAULT 0,
//     created_at TIMESTAMP                          NOT NULL DEFAULT (NOW()),
//     id_user    INTEGER                            NOT NULL,
//     FOREIGN KEY (id_user) REFERENCES Users (id_user)
// );

export const Post = database.define(
  "Post",
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
    timestamps: false,
  }
);
