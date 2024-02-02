import sequelize from "./utils/mysql.js";
import * as Sequelize from 'sequelize';
import config from "./config";
import * as dayjs from "dayjs";
const UsersModel = sequelize.define('users', {
    user_id: {
        // 数据类型
        type: Sequelize.INTEGER,
        // 主键
        primaryKey: true,
        // 自增
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(255)
    },
    nickname: {
        type: Sequelize.STRING(255)
    },
    email: {
        type: Sequelize.STRING(255)
    },
    password: {
        type: Sequelize.CHAR(32)
    },
    user_pic: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.TINYINT(4),
        defaultValue: 0
    },
    update_time: {
        type: Sequelize.DATE,
        // 格式化日期时间戳
        get() {
            return this.getDataValue('update_time')
                ? dayjs(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss')
                : null;
        }
    },
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get() {
            return dayjs(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
});

export default UsersModel