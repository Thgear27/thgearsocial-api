import { database } from "../../config/database.js";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

// CREATE TABLE Likes
// (
//     id_like    INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     id_user    INTEGER                            NOT NULL,
//     id_post    INTEGER                            NOT NULL,
//     created_at TIMESTAMP DEFAULT (NOW()),
//     FOREIGN KEY (id_user) REFERENCES Users (id_user),
//     FOREIGN KEY (id_post) REFERENCES Posts (id_post),
//     UNIQUE (id_user, id_post)
// );

export class Like extends Model<InferAttributes<Like>, InferCreationAttributes<Like>> {
  declare id_like: CreationOptional<number>;
  declare id_user: number;
  declare id_post: number;
  declare created_at: CreationOptional<Date>;
}

Like.init(
  {
    id_like: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: database,
    timestamps: false,
    tableName: "Like",
  }
);
