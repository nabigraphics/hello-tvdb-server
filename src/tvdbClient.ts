import got from "got";

const gotInstance = got.extend({
  prefixUrl: process.env.TVDB_API_ENDPOINT,
  headers: {
    Accept: `application/vnd.thetvdb.${process.env.TVDB_API_VERSION}`,
  },
});

const getHeaders = (token?: string) =>
  token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;

class TvdbClient {
  apiKey?: string;
  language?: string;
  token?: string;

  init = (apiKey?: string, language?: string) => {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    console.log(`Initialize TVDB Client`);

    this.apiKey = apiKey;
    this.language =
      language || (process.env.TVDB_API_DEFAULT_LANGUAGE as string);

    this.login(apiKey);
  };

  login = (apiKey: string) => {
    (async () => {
      console.log("login! ->", this.apiKey);
      try {
        const body = await gotInstance
          .post("/login", { json: { apikey: apiKey } })
          .json<{ token: string }>();

        this.token = body.token;
      } catch (err) {}
    })();
  };

  getSeriesByName = async (name: string) => {
    try {
      const data = await gotInstance
        .get(`/search/series`, {
          searchParams: {
            name,
          },
          headers: {
            ...getHeaders(this.token),
            "Accept-Language": this.language,
          },
        })
        .json();

      console.log(data);

      return data;
    } catch (err) {
      return err;
    }
  };
}

export default new TvdbClient();
