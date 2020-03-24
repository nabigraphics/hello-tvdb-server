import Router from "@koa/router";
import search from "./search";

const v1 = new Router();

v1.use("/search", search.routes());

export default v1;
