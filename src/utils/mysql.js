import * as Sequelize from 'sequelize';
import config from "../config/index";
// 建立连接
const sequelize = new Sequelize(
    // 以下内容根据自身修改
    config.mysql.dbName, // 数据库名
    config.mysql.user, // 连接用户名
    config.mysql.passward, // 密码
    {
        dialect: 'mysql', // 数据库类型
        host: config.mysql.host, // ip
        port: config.mysql.port, // 端口
        define: {
            timestamps: false // 不自动创建时间
        },
        timezone: config.mysql.timezone // 东八时区
    }
);

export default sequelize;
