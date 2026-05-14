import { DataTypes, Sequelize } from 'sequelize';

function initUser(sequelize: Sequelize) {
    const user = sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.BIGINT,
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
            roleCode: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            nickname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            lastLoginTime: {
                type: DataTypes.DATE,
                comment: '最后登录时间',
                allowNull: true,
                defaultValue: DataTypes.NOW  // 插入时自动设为当前时间
            }
        },
        {
            // freezeTableName: true,
            tableName: 'user',
            paranoid: true
            // underscored: true
        },
    )
    return user
}

export {
    initUser
}