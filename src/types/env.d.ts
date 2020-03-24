declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    TVDB_API_VERSION: string;
    TVDB_API_ENDPOINT: string;
    TVDB_API_KEY: string;
    TVDB_API_DEFAULT_LANGUAGE: string;
  }
}
