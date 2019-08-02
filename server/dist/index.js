"use strict";

var _http = require("http");

var _url = require("url");

var _next = _interopRequireDefault(require("next"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _noCache = _interopRequireDefault(require("./middlewares/no-cache"));

var _table = _interopRequireDefault(require("./routes/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const dev = process.env.NODE_ENV !== "production";
const nextApp = (0, _next.default)({
  dev
});
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
  const app = (0, _express.default)(); // Set gloabl variable

  app.set("port", port); // Middlewares

  app.use((0, _morgan.default)("dev"));
  app.use(_express.default.json());
  app.use(_express.default.urlencoded({
    extended: false
  })); // Express server will handle API request

  app.use("/api/*", _noCache.default); // APIs routes

  app.use("/api/table", _table.default); // Let the NextApp handle everything else

  app.get("*", (req, res) => {
    const parsedUrl = (0, _url.parse)(req.url, true);
    nextRequestHandler(req, res, parsedUrl);
  }); // Create server

  const server = (0, _http.createServer)(app);
  server.listen(port);
  server.on("error", function onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`; // handle specific listen errors with friendly messages

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
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJuZXh0QXBwIiwibmV4dFJlcXVlc3RIYW5kbGVyIiwiZ2V0UmVxdWVzdEhhbmRsZXIiLCJwb3J0Iiwibm9ybWFsaXplUG9ydCIsIlBPUlQiLCJ2YWwiLCJwYXJzZUludCIsImlzTmFOIiwicHJlcGFyZSIsInRoZW4iLCJhcHAiLCJzZXQiLCJ1c2UiLCJleHByZXNzIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm5vQ2FjaGUiLCJ0YWJsZVJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInBhcnNlZFVybCIsInVybCIsInNlcnZlciIsImxpc3RlbiIsIm9uIiwib25FcnJvciIsImVycm9yIiwic3lzY2FsbCIsImJpbmQiLCJjb2RlIiwiY29uc29sZSIsImV4aXQiLCJvbkxpc3RlbmluZyIsImFkZHIiLCJhZGRyZXNzIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFTQSxNQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXJDO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLG1CQUFLO0FBQUVKLEVBQUFBO0FBQUYsQ0FBTCxDQUFoQjtBQUNBLE1BQU1LLGtCQUFrQixHQUFHRCxPQUFPLENBQUNFLGlCQUFSLEVBQTNCO0FBRUEsTUFBTUMsSUFBSSxHQUFHQyxhQUFhLENBQUNQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFaLElBQW9CLElBQXJCLENBQTFCOztBQUVBLFNBQVNELGFBQVQsQ0FBdUJFLEdBQXZCLEVBQTRCO0FBQzFCLFFBQU1ILElBQUksR0FBR0ksUUFBUSxDQUFDRCxHQUFELEVBQU0sRUFBTixDQUFyQjs7QUFFQSxNQUFJRSxLQUFLLENBQUNMLElBQUQsQ0FBVCxFQUFpQjtBQUNmO0FBQ0EsV0FBT0csR0FBUDtBQUNEOztBQUVELE1BQUlILElBQUksSUFBSSxDQUFaLEVBQWU7QUFDYjtBQUNBLFdBQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRDs7QUFFREgsT0FBTyxDQUFDUyxPQUFSLEdBQWtCQyxJQUFsQixDQUF1QixNQUFNO0FBQzNCLFFBQU1DLEdBQUcsR0FBRyx1QkFBWixDQUQyQixDQUczQjs7QUFDQUEsRUFBQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixFQUFnQlQsSUFBaEIsRUFKMkIsQ0FNM0I7O0FBQ0FRLEVBQUFBLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLHFCQUFPLEtBQVAsQ0FBUjtBQUNBRixFQUFBQSxHQUFHLENBQUNFLEdBQUosQ0FBUUMsaUJBQVFDLElBQVIsRUFBUjtBQUNBSixFQUFBQSxHQUFHLENBQUNFLEdBQUosQ0FBUUMsaUJBQVFFLFVBQVIsQ0FBbUI7QUFBRUMsSUFBQUEsUUFBUSxFQUFFO0FBQVosR0FBbkIsQ0FBUixFQVQyQixDQVczQjs7QUFDQU4sRUFBQUEsR0FBRyxDQUFDRSxHQUFKLENBQVEsUUFBUixFQUFrQkssZ0JBQWxCLEVBWjJCLENBYTNCOztBQUNBUCxFQUFBQSxHQUFHLENBQUNFLEdBQUosQ0FBUSxZQUFSLEVBQXNCTSxjQUF0QixFQWQyQixDQWdCM0I7O0FBQ0FSLEVBQUFBLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLEdBQVIsRUFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN6QixVQUFNQyxTQUFTLEdBQUcsZ0JBQU1GLEdBQUcsQ0FBQ0csR0FBVixFQUFlLElBQWYsQ0FBbEI7QUFDQXZCLElBQUFBLGtCQUFrQixDQUFDb0IsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLFNBQVgsQ0FBbEI7QUFDRCxHQUhELEVBakIyQixDQXNCM0I7O0FBQ0EsUUFBTUUsTUFBTSxHQUFHLHdCQUFhZCxHQUFiLENBQWY7QUFDQWMsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWN2QixJQUFkO0FBQ0FzQixFQUFBQSxNQUFNLENBQUNFLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3pDLFFBQUlBLEtBQUssQ0FBQ0MsT0FBTixLQUFrQixRQUF0QixFQUFnQztBQUM5QixZQUFNRCxLQUFOO0FBQ0Q7O0FBRUQsVUFBTUUsSUFBSSxHQUFHLE9BQU81QixJQUFQLEtBQWdCLFFBQWhCLEdBQ1IsUUFBT0EsSUFBSyxFQURKLEdBRVIsUUFBT0EsSUFBSyxFQUZqQixDQUx5QyxDQVN6Qzs7QUFDQSxZQUFRMEIsS0FBSyxDQUFDRyxJQUFkO0FBQ0UsV0FBSyxRQUFMO0FBQ0VDLFFBQUFBLE9BQU8sQ0FBQ0osS0FBUixDQUFlLEdBQUVFLElBQUssK0JBQXRCO0FBQ0FsQyxRQUFBQSxPQUFPLENBQUNxQyxJQUFSLENBQWEsQ0FBYjtBQUNBOztBQUNGLFdBQUssWUFBTDtBQUNFRCxRQUFBQSxPQUFPLENBQUNKLEtBQVIsQ0FBZSxHQUFFRSxJQUFLLG9CQUF0QjtBQUNBbEMsUUFBQUEsT0FBTyxDQUFDcUMsSUFBUixDQUFhLENBQWI7QUFDQTs7QUFDRjtBQUNFLGNBQU1MLEtBQU47QUFWSjtBQVlELEdBdEJEO0FBdUJBSixFQUFBQSxNQUFNLENBQUNFLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFNBQVNRLFdBQVQsR0FBdUI7QUFDNUMsVUFBTUMsSUFBSSxHQUFHWCxNQUFNLENBQUNZLE9BQVAsRUFBYjtBQUNBLFVBQU1OLElBQUksR0FBRyxPQUFPSyxJQUFQLEtBQWdCLFFBQWhCLEdBQ1IsUUFBT0EsSUFBSyxFQURKLEdBRVIsUUFBT0EsSUFBSSxDQUFDakMsSUFBSyxFQUZ0QjtBQUdBOEIsSUFBQUEsT0FBTyxDQUFDSyxHQUFSLENBQWEsZ0JBQWVQLElBQUssRUFBakM7QUFDRCxHQU5EO0FBT0QsQ0F2REQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vLyBUaGlzIGZpbGUgZG9lc24ndCBnbyB0aHJvdWdoIGJhYmVsIG9yIHdlYnBhY2sgdHJhbnNmb3JtYXRpb24uXG4vLyBNYWtlIHN1cmUgdGhlIHN5bnRheCBhbmQgc291cmNlcyB0aGlzIGZpbGUgcmVxdWlyZXMgYXJlIGNvbXBhdGlibGUgd2l0aCB0aGUgY3VycmVudCBub2RlIHZlcnNpb24geW91IGFyZSBydW5uaW5nXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvMTI0NSBmb3IgZGlzY3Vzc2lvbnMgb24gVW5pdmVyc2FsIFdlYnBhY2sgb3IgdW5pdmVyc2FsIEJhYmVsXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwidXJsXCI7XG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIm1vcmdhblwiO1xuaW1wb3J0IG5vQ2FjaGUgZnJvbSBcIi4vbWlkZGxld2FyZXMvbm8tY2FjaGVcIjtcbmltcG9ydCB0YWJsZVJvdXRlciBmcm9tIFwiLi9yb3V0ZXMvdGFibGVcIjtcblxuY29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiO1xuY29uc3QgbmV4dEFwcCA9IG5leHQoeyBkZXYgfSk7XG5jb25zdCBuZXh0UmVxdWVzdEhhbmRsZXIgPSBuZXh0QXBwLmdldFJlcXVlc3RIYW5kbGVyKCk7XG5cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsKSB7XG4gIGNvbnN0IHBvcnQgPSBwYXJzZUludCh2YWwsIDEwKTtcblxuICBpZiAoaXNOYU4ocG9ydCkpIHtcbiAgICAvLyBuYW1lZCBwaXBlXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGlmIChwb3J0ID49IDApIHtcbiAgICAvLyBwb3J0IG51bWJlclxuICAgIHJldHVybiBwb3J0O1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5uZXh0QXBwLnByZXBhcmUoKS50aGVuKCgpID0+IHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4gIC8vIFNldCBnbG9hYmwgdmFyaWFibGVcbiAgYXBwLnNldChcInBvcnRcIiwgcG9ydCk7XG5cbiAgLy8gTWlkZGxld2FyZXNcbiAgYXBwLnVzZShsb2dnZXIoXCJkZXZcIikpO1xuICBhcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbiAgYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG4gIC8vIEV4cHJlc3Mgc2VydmVyIHdpbGwgaGFuZGxlIEFQSSByZXF1ZXN0XG4gIGFwcC51c2UoXCIvYXBpLypcIiwgbm9DYWNoZSk7XG4gIC8vIEFQSXMgcm91dGVzXG4gIGFwcC51c2UoXCIvYXBpL3RhYmxlXCIsIHRhYmxlUm91dGVyKTtcblxuICAvLyBMZXQgdGhlIE5leHRBcHAgaGFuZGxlIGV2ZXJ5dGhpbmcgZWxzZVxuICBhcHAuZ2V0KFwiKlwiLCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwYXJzZWRVcmwgPSBwYXJzZShyZXEudXJsLCB0cnVlKTtcbiAgICBuZXh0UmVxdWVzdEhhbmRsZXIocmVxLCByZXMsIHBhcnNlZFVybCk7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBzZXJ2ZXJcbiAgY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKGFwcCk7XG4gIHNlcnZlci5saXN0ZW4ocG9ydCk7XG4gIHNlcnZlci5vbihcImVycm9yXCIsIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3Iuc3lzY2FsbCAhPT0gXCJsaXN0ZW5cIikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSBcInN0cmluZ1wiXG4gICAgICA/IGBQaXBlICR7cG9ydH1gXG4gICAgICA6IGBQb3J0ICR7cG9ydH1gO1xuXG4gICAgLy8gaGFuZGxlIHNwZWNpZmljIGxpc3RlbiBlcnJvcnMgd2l0aCBmcmllbmRseSBtZXNzYWdlc1xuICAgIHN3aXRjaCAoZXJyb3IuY29kZSkge1xuICAgICAgY2FzZSBcIkVBQ0NFU1wiOlxuICAgICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IHJlcXVpcmVzIGVsZXZhdGVkIHByaXZpbGVnZXNgKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJFQUREUklOVVNFXCI6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSk7XG4gIHNlcnZlci5vbihcImxpc3RlbmluZ1wiLCBmdW5jdGlvbiBvbkxpc3RlbmluZygpIHtcbiAgICBjb25zdCBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcbiAgICBjb25zdCBiaW5kID0gdHlwZW9mIGFkZHIgPT09IFwic3RyaW5nXCJcbiAgICAgID8gYHBpcGUgJHthZGRyfWBcbiAgICAgIDogYHBvcnQgJHthZGRyLnBvcnR9YDtcbiAgICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uICR7YmluZH1gKTtcbiAgfSk7XG59KTsiXX0=