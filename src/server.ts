require("dotenv").config();
import TvdbClient from "./tvdbClient";
import app from "./app";

const PORT = process.env.PORT;

TvdbClient.init(
  process.env.TVDB_API_KEY,
  process.env.TVDB_API_DEFAULT_LANGUAGE
);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT} port`);
});
