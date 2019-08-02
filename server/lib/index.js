/* eslint-disable no-console */
// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
import { createServer } from "http";
import { parse } from "url";
import next from "next";
import express from "express";
import logger from "morgan";
import noCache from "./middlewares/no-cache";
import tableRouter from "./routes/table";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextRequestHandler = nextApp.getRequestHandler();

const port = normalizePort(process.env.PORT || 3000);

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

nextApp.prepare().then(() => {
  const app = express();

  // Set gloabl variable
  app.set("port", port);

  // Middlewares
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Express server will handle API request
  app.use("/api/*", noCache);
  // APIs routes
  app.use("/api/table", tableRouter);

  // Let the NextApp handle everything else
  app.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    nextRequestHandler(req, res, parsedUrl);
  });

  // Create server
  const server = createServer(app);
  server.listen(port);
  server.on("error", function onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string"
      ? `Pipe ${port}`
      : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });
  server.on("listening", function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
      ? `pipe ${addr}`
      : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
  });
});