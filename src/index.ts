import express from "express";
import routes from "./routes";

const MODULE = "[Init]";

const main = async (props: { port: number | string }) => {
  console.log(MODULE, "Creating server");

  const app = express();
  app.use(routes);

  app.listen(props.port, () => {
    console.log(MODULE, `Server listening on port ${props.port}`);
    console.log(MODULE, "Environment:", process.env.NODE_ENV);
  });
};

main({
  port: process.env.PORT || 8100,
});
