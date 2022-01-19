const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Comment extends Model {}

// create fields/columns for Post model
Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
);

module.exports = Comment