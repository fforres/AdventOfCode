require("babel-register");
import input from './day3.input.js';
const goThroughHouses = (data) => {
  var dataLength = data.length;
  var output = new Array(dataLength);
  var houses = {};
  var posX=0;
  var posY=0;
  houses[0]={};
  houses[0][0]=1;
  var given = 1;
  for (var i = 0; i < dataLength; i++) {
    switch (data[i]) {
      case ">":
          posX++;
        break;
      case "<":
          posX--;
          break;
      case "^":
          posY++;
          break;
      case "v":
          posY--;
          break;
      default:
        break;
    }
    houses = checkData(houses,posX,posY);
    if(houses[posX][posY] === 1){
      given++;
    }
  }
  return given;
};
const checkData = (h,x,y)=>{
  if(typeof h[x] === 'undefined'){
    h[x] = {};
  }
  if(typeof h[x][y] === 'undefined'){
    h[x][y] = 0;
  }
  h[x][y] = h[x][y]+1;
  return h;
};
console.log(goThroughHouses(input));
