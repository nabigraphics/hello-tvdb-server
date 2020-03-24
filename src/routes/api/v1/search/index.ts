import Router from "@koa/router";
import TvdbClient from "../../../../tvdbClient";
const search = new Router();
/*

series
{
  name?:string;
}

*/

type SeriesParams = {
  name?: string;
};

search.get(`/series`, async (ctx) => {
  const { name } = ctx.query as SeriesParams;
  console.log("name query -> ", ctx.query.name);
  if (!name) {
    ctx.status = 404;
    ctx.body = "name params is required value.";
  } else {
    const data = await TvdbClient.getSeriesByName(name);
    ctx.body = data;
  }
});

export default search;
