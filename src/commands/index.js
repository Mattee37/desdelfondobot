import { nombreDeTrapero, dice } from "../helpers";

const commands = (channel, tags, message, client) => {
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

  if (message.toLowerCase().startsWith("!test ", 0)) {
    const raw = message.split("!test ")[1];
    client.say(channel, `Hola trolo ${raw}`);
  }

  if (message.toLowerCase().startsWith("!dice ", 0)) {
    const raw = message.split("!dice ")[1];
    client.say(channel, `Number: ${dice(parseInt(raw))}`);
  }
};

export default commands;
