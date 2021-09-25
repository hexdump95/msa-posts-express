import cors, { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: "*",
  exposedHeaders: ["Authorization", "Content-Type"]
};

const corsConfig = cors(corsOptions);

export default corsConfig;
