import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import routes from "./routes";
const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(routes.routes());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

export default app;
