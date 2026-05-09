import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';

function initRole(sequelize: Sequelize) {

    interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
        id: CreationOptional<number>;
        roleName: string;
        roleCode: string;
        description: string;
        status: number;
        createdBy: number;
        updatedBy: number
    }
    const role = sequelize.define<UserModel>(
        'Role',
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            roleName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            roleCode: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: '角色标识'
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
                comment: '角色描述'
            },
            status: {
                type: DataTypes.TINYINT,
                allowNull: true,
                comment: '禁用状态, 1启用 0禁用',
                defaultValue: 1
            },
            createdBy: {
                type: DataTypes.BIGINT,
                allowNull: true,

            },
            updatedBy: {
                type: DataTypes.BIGINT,
                allowNull: true,
            }
        },
        {
            tableName: 'role',
        },
    )
    return role
}

export {
    initRole
}