const { Game2 } = require("../models");

const game2Data = [
  {
    name: "Valorant",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/72904-1.jpg",
    game_type: "shooter",
  },
  {
    name: "Counter Strike: Global Offensive",
    description: "Tactical 5v5 shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/10771-1.jpg",
    game_type: "shooter",
  },
  {
    name: "Overwatch",
    description: "Brawl 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/32185-1.jpg",
    game_type: "shooter",
  },
  {
    name: "Rainbow Six Siege",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/33336-1.jpg",
    game_type: "shooter",
  },
  {
    name: "Mortal Kombat 11",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/62527-1.jpg",
    game_type: "fighter",
  },
  {
    name: "Marvel v Capcom 3",
    description: "Tactical 5v5 shooter",
    cover_art:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yej.png",
    game_type: "fighter",
  },
  {
    name: "Street Fighter 5",
    description: "Brawl 5v5 hero shooter",
    cover_art:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1pka.png",
    game_type: "fighter",
  },
  {
    name: "Tekken 7",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1w4f.png",
    game_type: "fighter",
  },
  {
    name: "League of Legends",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/928-1.jpg",
    game_type: "moba",
  },
  {
    name: "DOTA 2",
    description: "Tactical 5v5 shooter",
    cover_art:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co4bko.png",
    game_type: "moba",
  },
  {
    name: "Heroes of the Storm",
    description: "Brawl 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/48640-1.jpg",
    game_type: "moba",
  },
  {
    name: "Smite",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/65951-1.jpg",
    game_type: "moba",
  },
  {
    name: "Among Us",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/77267-1.jpg",
    game_type: "party",
  },
  {
    name: "Gang Beasts",
    description: "Tactical 5v5 shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/29244-1.jpg",
    game_type: "party",
  },
  {
    name: "Pummel Party",
    description: "Brawl 5v5 hero shooter",
    cover_art:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co20uq.png",
    game_type: "party",
  },
  {
    name: "Rocket League",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/29478-1.jpg",
    game_type: "party",
  },
  {
    name: "F1 22",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/99857-1.jpg",
    game_type: "sport",
  },
  {
    name: "FIFA 22",
    description: "Tactical 5v5 shooter",
    cover_art:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3dsm.png",
    game_type: "sport",
  },
  {
    name: "NBA 2k22",
    description: "Brawl 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/99058-1.jpg",
    game_type: "sport",
  },
  {
    name: "PGA 2k21",
    description: "Tactical 5v5 hero shooter",
    cover_art:
      "https://cdn.thegamesdb.net/images/original/boxart/front/94427-1.jpg",
    game_type: "sport",
  },
];

const seedGame2s = () => Game2.bulkCreate(game2Data);

module.exports = seedGame2s;
