let config = { mysql: {} }

switch (process.env.NODE_ENV) {
    case 'prodection':
        config = {
            mysql: {}
        };
        break;
    default:
        config.mysql = {
            dbName: 'kervin_admin',
            user: 'admin',
            passward: 'admin1024',
            host: '127.0.0.1',
            port: 3306,
            timezone: '+08:00'
        }
        break;
}

export default config