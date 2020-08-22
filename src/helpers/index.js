import "dotenv/config";
import axios from "axios";

export const nombreDeTrapero = (raw) => {
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

export const dice = (n) => {
  return (Math.random() * n) / 100;
};

export const getGif = async (q) => {
  const query = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.TOKEN}&q=${q}&limit=1&offset=0&rating=r&lang=en`;
  const response = await axios.get(query);
  const msg = {};
  if (response.data.pagination.count === 0) {
    msg.exist = false;
    msg.text = "proba otra cosa, eso no existe crack.";
  } else {
    msg.exist = true;
    msg.text = response.data.data[0].images.preview.mp4;
  }
  return msg;
};
