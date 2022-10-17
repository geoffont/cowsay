const myInfo  = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${myInfo.lastname} ${myInfo.campus}`,
    e : "oO",
    T : "U "
}));