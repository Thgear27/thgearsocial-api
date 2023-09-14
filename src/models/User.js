import { database } from "../../config/database.js";
import { DataTypes } from "sequelize";

export const User = database.define(
  "User",
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nick_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    email_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING(255),
    },
    img_url: {
      type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    followers: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    posts: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);
