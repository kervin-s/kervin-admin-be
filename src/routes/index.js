'use strict';
import user from './modules/user'
const setupRouter = (app) => {
    app.use(user)
}


export default setupRouter