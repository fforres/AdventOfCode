require("babel-register");
import input from './day2.input.js';
var sum = 0;
const addRibbon = (arrSplit)=>{
  return (arrSplit[0]*arrSplit[1]*arrSplit[2])+addBow(arrSplit);
}
const addBow = (arrSplit)=>{
  arrSplit.sort((a, b)=>{
    return a-b
  });
  return 2*(arrSplit[0]+arrSplit[1]);
}
input.split('\n').forEach((el,i,as)=>{
  sum += addRibbon(el.split('x').map((el)=>{
    return parseInt(el);
  }))
});
console.log(sum);
