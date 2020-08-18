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
