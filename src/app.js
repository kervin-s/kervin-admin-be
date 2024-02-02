import express from 'express'
import cors from "cors";
import bodyParser from "body-parser";
import setupRouter from "./routes/index.js";

const app = express()

/* 跨域插件*/
app.use(cors())
/* 配置解析表单数据的中间件 */
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

/*安装路由 */
setupRouter(app)

const run = (port) => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}


export default run