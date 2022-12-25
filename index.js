require("dotenv").config();
require("./src/database/database");
const Hapi = require("@hapi/hapi");
const routes = require("./src/routes/routes");

const init = async () => {
  const port = process.env.PORT || 4000;
  const host = process.env.HOST || "0.0.0.0";
  try {
    const server = Hapi.server({
      port: port,
      host: host,
    });

    server.route({
      method: "GET",
      path: "/",
      handler: (request, h) => {
        return "Hello World!";
      },
    });

    await server.route(routes);

    await server.start();
    console.log("Server berjalan pada %s", server.info.uri);
  } catch (error) {
    console.log(`Terjadi kesalahan pada ${error.message}`);
  }
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
