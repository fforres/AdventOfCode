require("babel-register");
import input from './day3.input.js';
const goThroughHouses = (data) => {
  var dataLength = data.length;
  var output = new Array(dataLength);
  var houses = {};
  houses[0] = {};
  houses[0][0] = 1;
  var realSanta = setInitialSantaState();
  var roboSanta = setInitialSantaState();
  var given = 1;
  for (var i = 0; i < dataLength; i++) {
    var santa = roboSanta;
    if(i%2 ==0){
      santa = realSanta;
    }
    switch (data[i]) {
      case ">":
        santa.posX++;
        break;
      case "<":
        santa.posX--;
        break;
      case "^":
        santa.posY++;
        break;
      case "v":
        santa.posY--;
        break;
      default:
        break;
    }
    houses = checkData(houses, santa);
    if (houses[santa.posX][santa.posY] === 1) {
      given++;
    }
  }
  return given;
};
const setInitialSantaState =()=>{
  return {
    posX : 0,
    posY : 0
  };
};
const checkData = (houses,santa) => {
  if (typeof houses[santa.posX] === 'undefined') {
    houses[santa.posX] = {};
  }
  if (typeof houses[santa.posX][santa.posY] === 'undefined') {
    houses[santa.posX][santa.posY] = 0;
  }
  houses[santa.posX][santa.posY] = houses[santa.posX][santa.posY] + 1;
  return houses;
};
console.log(goThroughHouses(input));
