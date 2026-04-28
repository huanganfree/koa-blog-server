import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/index';


const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INET,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '加密密码'
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '昵称'
        },
        lastLoginTime: {
            type: DataTypes.DATE,
            comment: '最后登录时间'
        }
    },
    {
        // freezeTableName: true,
        tableName: 'user',
    },
);

export {
    User
}