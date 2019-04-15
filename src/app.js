const Hapi = require("hapi");
const Routes = require("./routes/route");
const config = require("../config/config.json");


const server = new Hapi.server(config.server);

server.route(Routes.baseroutes);


server.start(() => {
   console.log('Server started');
});
