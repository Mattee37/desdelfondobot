import { nombreDeTrapero, dice, getGif } from "../helpers";

const commands = (channel, tags, message, client) => {
  if (message.toLowerCase().startsWith("!comandos", 0)) {
    client.say(
      channel,
      "Lista de comandos: ' !trapero ', ' !test ', ' !dice ', ' !gif '. Agregales un ' ? ' al final para saber como se usa cada uno, ejemplo ' !trapero ? '"
    );
  }

  if (message.toLowerCase().startsWith("!trapero ", 0)) {
    const raw = message.split("!trapero ")[1];

    if (raw === "?") {
      client.say(
        channel,
        `@${tags["display-name"]} Primer número de tu DNI, día de tu cumpleaños y primer numero de tu teléfono, ejemplo => " !trapero 123 "`
      );
    } else if (raw.length === 3 && !isNaN(parseInt(raw))) {
      const nombre = nombreDeTrapero(raw);
      client.say(
        channel,
        `@${tags["display-name"]} a partir de ahora sos ${nombre}, SKERE`
      );
    } else {
      client.say(
        channel,
        `@${tags["display-name"]} Le erraste maquina, proba con " !trapero 666 "`
      );
    }
  }

  if (message.toLowerCase().startsWith("!gif ", 0)) {
    const raw = message.split("!gif ")[1];

    if (raw === "?") {
      client.say(
        channel,
        `@${tags["display-name"]} utilizá una palabra para buscar, ejemplo => " !gif peronismo "`
      );
    } else if (raw !== " " && raw !== "?") {
      getGif(raw)
        .then((r) => {
          if (r.exist) {
            client.say(
              channel,
              `@${tags["display-name"]} toma, aca tenes tu gif papanata => ${r.text}`
            );
          } else {
            client.say(channel, `@${tags["display-name"]} ${r.text}`);
          }
        })
        .catch(console.error);
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
