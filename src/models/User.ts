import { database } from "../../config/database";
import {
  Association,
  CreationOptional,
  DataTypes,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Post } from "./Post.js";

export class User extends Model<InferAttributes<User>,  InferCreationAttributes<User>> {
  declare id_user: CreationOptional<number>;
  declare name: string;
  declare nick_name: string;
  declare email_address: string;
  declare last_name: string;
  declare bio: string;
  declare img_url: CreationOptional<string>;
  declare created_at: CreationOptional<Date>;
  declare followers_count: CreationOptional<number>;
  declare posts_count: CreationOptional<number>;

  declare getPosts: HasManyGetAssociationsMixin<Post>;

  declare static associations: {
    actual_posts: Association<User, Post>;
  };
}

User.init(
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
      defaultValue: DataTypes.NOW,
    },
    followers_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    posts_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize: database,
    tableName: "User",
    timestamps: false,
  }
);

User.hasMany(Post, {
  sourceKey: "id_user",
  foreignKey: "id_user",
  as: "actual_posts",
});

// Post.belongsTo(User, {
//   targetKey: "id_user",
// });

