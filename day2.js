require("babel-register");
import input from './day2.input.js';
var sum = 0;
const addSurface = (arrSplit)=>{
   return (2*arrSplit[0]*arrSplit[1] + 2*arrSplit[0]*arrSplit[2] + 2*arrSplit[1]*arrSplit[2])+addSides(arrSplit);
}
const addSides = (arrSplit)=>{
  arrSplit.sort((a, b)=>{
    return a-b
  });
  return arrSplit[0]*arrSplit[1];
}
input.split('\n').forEach((el,i,as)=>{
  sum += addSurface(el.split('x').map((el)=>{
    return parseInt(el);
  }))
});
console.log(sum);
