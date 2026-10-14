// Man Utd squad 2026/27 (stats are sample numbers)
//start of mongoWork
const flags = require('./flags');

// Player photos (small size for the table)
const PHOTO_CDN = 'https://dynamic-crop-cdn.scoreplay.io/472/';
const PHOTO_SIZE = '?fmt=webp&f=center&w=240&h=327';
const photo = (path) => PHOTO_CDN + path + PHOTO_SIZE;

const players = [
  // Goalkeepers
  { number: 1,  name: 'Senne Lammens',     position: 'Goalkeeper', age: 24, flag: flags.belgium,     photo: photo('4896327/media_102559948_102167072.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 1, redCards: 0, minutesPlayed: 540 } },
  { number: 12, name: 'Karl Darlow',       position: 'Goalkeeper', age: 35, flag: flags.wales,       photo: photo('5336994/media_113873039_113482082.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 90 } },

  // Defenders
  { number: 2,  name: 'Diogo Dalot',       position: 'Defender',   age: 27, flag: flags.portugal,    photo: photo('4896325/media_102559860_102166986.jpg'),            stats: { assists: 1, goals: 0, yellowCards: 1, redCards: 0, minutesPlayed: 412 } },
  { number: 3,  name: 'Noussair Mazraoui', position: 'Defender',   age: 28, flag: flags.morocco,     photo: photo('4896325/media_102559862_102166985.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 186 } },
  { number: 4,  name: 'Matthijs de Ligt',  position: 'Defender',   age: 27, flag: flags.netherlands, photo: photo('4896325/media_102559865_102166989.jpg'),            stats: { assists: 0, goals: 1, yellowCards: 2, redCards: 0, minutesPlayed: 450 } },
  { number: 5,  name: 'Harry Maguire',     position: 'Defender',   age: 33, flag: flags.england,     photo: photo('4896325/media_102559861_102166984.jpg'),            stats: { assists: 0, goals: 1, yellowCards: 0, redCards: 0, minutesPlayed: 270 } },
  { number: 6,  name: 'Lisandro Martínez', position: 'Defender',   age: 28, flag: flags.argentina,   photo: photo('4896325/media_102559864_102166988.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 2, redCards: 0, minutesPlayed: 360 } },
  { number: 13, name: 'Patrick Dorgu',     position: 'Defender',   age: 21, flag: flags.denmark,     photo: photo('4896325/media_102559867_102166991.jpg'),            stats: { assists: 2, goals: 0, yellowCards: 1, redCards: 0, minutesPlayed: 398 } },
  { number: 15, name: 'Leny Yoro',         position: 'Defender',   age: 20, flag: flags.france,      photo: photo('4896325/media_102559869_102166993_compressed.jpg'), stats: { assists: 0, goals: 0, yellowCards: 1, redCards: 0, minutesPlayed: 315 } },
  { number: 23, name: 'Luke Shaw',         position: 'Defender',   age: 31, flag: flags.england,     photo: photo('4896325/media_102559870_102166995.jpg'),            stats: { assists: 1, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 240 } },
  { number: 26, name: 'Ayden Heaven',      position: 'Defender',   age: 20, flag: flags.england,     photo: photo('4896325/media_102559872_102166996.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 45 } },
  { number: 41, name: 'Harry Amass',       position: 'Defender',   age: 19, flag: flags.england,     photo: photo('4896325/media_102559875_102166999.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 67 } },

  // Midfielders
  { number: 7,  name: 'Mason Mount',       position: 'Midfielder', age: 27, flag: flags.england,     photo: photo('4896330/media_102559976_102167100.jpg'),            stats: { assists: 1, goals: 1, yellowCards: 0, redCards: 0, minutesPlayed: 233 } },
  { number: 8,  name: 'Bruno Fernandes',   position: 'Midfielder', age: 32, flag: flags.portugal,    photo: photo('4896330/media_102559977_102167101.jpg'),            stats: { assists: 3, goals: 2, yellowCards: 2, redCards: 0, minutesPlayed: 450 } },
  { number: 17, name: 'Andrey Santos',     position: 'Midfielder', age: 22, flag: flags.brazil,      photo: photo('5330430/media_113637564_113246603_compressed.jpg'), stats: { assists: 1, goals: 0, yellowCards: 1, redCards: 0, minutesPlayed: 210 } },
  { number: 18, name: 'Youri Tielemans',   position: 'Midfielder', age: 29, flag: flags.belgium,     photo: photo('5368351/media_114350399_113959456.jpg'),            stats: { assists: 2, goals: 1, yellowCards: 1, redCards: 0, minutesPlayed: 388 } },
  { number: 20, name: 'Carlos Baleba',     position: 'Midfielder', age: 22, flag: flags.cameroon,    photo: photo('5955367/media_120963187_120576617.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 2, redCards: 0, minutesPlayed: 301 } },
  { number: 25, name: 'Manuel Ugarte',     position: 'Midfielder', age: 25, flag: flags.uruguay,     photo: photo('4896330/media_102559981_102167105.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 2, redCards: 1, minutesPlayed: 278 } },
  { number: 37, name: 'Kobbie Mainoo',     position: 'Midfielder', age: 21, flag: flags.england,     photo: photo('4896330/media_102559979_102167103.jpg'),            stats: { assists: 1, goals: 0, yellowCards: 1, redCards: 0, minutesPlayed: 344 } },
  { number: 38, name: 'Jack Fletcher',     position: 'Midfielder', age: 19, flag: flags.scotland,    photo: photo('4896330/media_102559978_102167102.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 28 } },
  { number: 39, name: 'Tyler Fletcher',    position: 'Midfielder', age: 19, flag: flags.scotland,    photo: photo('4896330/media_102559982_102167106.jpg'),            stats: { assists: 0, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 12 } },

  // Attackers
  { number: 9,  name: 'Marcus Rashford',   position: 'Attacker',   age: 28, flag: flags.england,     photo: photo('4896326/media_102559915_102167039.jpg'),            stats: { assists: 1, goals: 2, yellowCards: 0, redCards: 0, minutesPlayed: 296 } },
  { number: 10, name: 'Matheus Cunha',     position: 'Attacker',   age: 27, flag: flags.brazil,      photo: photo('4896326/media_102559903_102167027.jpg'),            stats: { assists: 2, goals: 2, yellowCards: 1, redCards: 0, minutesPlayed: 402 } },
  { number: 11, name: 'Joshua Zirkzee',    position: 'Attacker',   age: 25, flag: flags.netherlands, photo: photo('4896326/media_102559902_102167028.jpg'),            stats: { assists: 0, goals: 1, yellowCards: 0, redCards: 0, minutesPlayed: 121 } },
  { number: 16, name: 'Amad',              position: 'Attacker',   age: 24, flag: flags.ivoryCoast,  photo: photo('4896326/media_102559906_102167030.jpg'),            stats: { assists: 2, goals: 1, yellowCards: 0, redCards: 0, minutesPlayed: 365 } },
  { number: 19, name: 'Bryan Mbeumo',      position: 'Attacker',   age: 27, flag: flags.cameroon,    photo: photo('4896326/media_102559904_102167026.jpg'),            stats: { assists: 1, goals: 3, yellowCards: 0, redCards: 0, minutesPlayed: 430 } },
  { number: 30, name: 'Benjamin Šeško',    position: 'Attacker',   age: 23, flag: flags.slovenia,    photo: photo('4896326/media_102559907_102167031.jpg'),            stats: { assists: 1, goals: 2, yellowCards: 1, redCards: 0, minutesPlayed: 376 } },
  { number: 31, name: 'Shea Lacey',        position: 'Attacker',   age: 19, flag: flags.england,     photo: photo('6364755/media_125919438_125535376.jpg'),            stats: { assists: 1, goals: 0, yellowCards: 0, redCards: 0, minutesPlayed: 84 } }
];

module.exports = players;
