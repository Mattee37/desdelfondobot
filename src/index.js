import tmi from "tmi.js";
import "dotenv/config";

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
  channels: ["desdelfondo"],
};

const client = new tmi.Client(options);

client
  .connect()
  .then(console.log(`Bot funcionando en puerto ${options.connection.port}`))
  .catch(console.error);

const nombreDeTrapero = (raw) => {
  const part1 = [
    "Big",
    "A$AP",
    "Money Maker",
    "Sleepy",
    "Lil",
    "Evil",
    "Mean",
    "Wild",
    "Young",
    "Daddy",
  ];

  const part2 = [
    "Chocolate",
    "Banana",
    "Dollar",
    "Strawberry",
    "Bean",
    "Ocean",
    "Storm",
    "Weed",
    "Potato",
    "Carrot",
  ];

  const part3 = [
    "G.",
    "B.",
    "Bunny",
    "Guy",
    "Flexxx",
    "Lamborghini",
    "Dude",
    "Criminal",
    "O. J.",
    "Queen",
  ];

  return `${part1[raw[0]]} ${part2[raw[1]]} ${part3[raw[2]]}`;
};

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  console.log(`${tags["display-name"]}: ${message}`);

  if (message.toLowerCase().startsWith("!trapero ", 0)) {
    const raw = message.split("!trapero ")[1];

    if (raw.length === 3 && !isNaN(parseInt(raw))) {
      const nombre = nombreDeTrapero(raw);
      client.say(
        channel,
        `@${tags["display-name"]} a partir de ahora sos ${nombre}, SKERE`
      );
    } else {
      client.say(
        channel,
        `@${tags["display-name"]} Le erraste maquina, proba con "!trapero 666"`
      );
    }
  }
});
