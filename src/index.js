import tmi from "tmi.js";
import "dotenv/config";
import commands from "./commands";

const options = {
  connection: {
    secure: true,
    reconnect: true,
    port: process.env.PORT || 3000,
  },
  identity: {
    username: process.env.NAME,
    password: process.env.OAUTH,
  },
  channels: ["mattee37", "desdelfondo"],
};

const client = new tmi.Client(options);

client
  .connect()
  .then(console.log(`Bot funcionando en puerto ${options.connection.port}`))
  .catch(console.error);

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  console.log(`${tags["display-name"]}: ${message}`);

  commands(channel, tags, message, client);
});
