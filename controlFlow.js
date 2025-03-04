// It turns out that even for mathematicians, calculating the number of small circles that fit inside a larger circle is not so straightforward! Wow.
let pie = 3.1415
let radius = 5 // meters
let areaDesig = pie * radius * radius
let plantSpace = 0.8 // square meters
// let plantNum = 20; // initial number
// let areaTakenMetre = plantSpace * plantNum //square metre
// let areaTakenPercent = plantSpace * plantNum/areaDesig * 100; // percentage

// console.log("Designated area for planting: " + areaDesig + " square metre");


//----------  1st Week Report:  -------------//
// let plantNum = 20; // initial number
// let areaTakenMetre = plantSpace * plantNum // square metre
// let areaTakenPercent = plantSpace * plantNum/areaDesig * 100; // percentage

// console.log("1st Week Report")
// if (areaTakenPercent > 80) {
//     console.log(" - Pruned - ");
// } else if (areaTakenPercent > 50) {
//     console.log(" - Monitored - ");
// } else {
//     console.log("- Planted - ");
// }
// console.log("Area planted: " + areaTakenMetre + " square metre, " + areaTakenPercent + "%, Number of plants: " + plantNum);

// 1st Week Report
// - Planted - 
// Area planted: 16 square metre, 20.3724335508515%, Number of plants: 20





//----------  2nd Week Report:  -------------//

let plantNum = 20*2**2; //2nd week
let areaTakenMetre = plantSpace * plantNum //square metre
let areaTakenPercent = plantSpace * plantNum/areaDesig * 100; // percentage

console.log("2nd Week Report")
if (areaTakenPercent > 80) {
    console.log(" - Pruned - ");
} else if (areaTakenPercent > 50) {
    console.log(" - Monitored - ");
} else {
    console.log("- Planted - ");
}
console.log("Area planted: " + areaTakenMetre + " square metre, " + areaTakenPercent + "%, Number of plants: " + plantNum);

// 2nd Week Report
//  - Pruned - 
// Area planted: 64 square metre, 81.489734203406%, Number of plants: 80







//----------  3rd Week Report:  -------------//

// let plantNum = 20*2**3; //3rd week
// let areaTakenMetre = plantSpace * plantNum //square metre
// let areaTakenPercent = plantSpace * plantNum/areaDesig * 100; // percentage

// console.log("3rd Week Report")
// if (areaTakenPercent > 80) {
//     console.log(" - Pruned - ");
// } else if (areaTakenPercent > 50) {
//     console.log(" - Monitored - ");
// } else {
//     console.log("- Planted - ");
// }
// console.log("Area planted: " + areaTakenMetre + " square metre, " + areaTakenPercent + "%, Number of plants: " + plantNum);

// 3rd Week Report
//  - Pruned - 
// Area planted: 128 square metre, 162.979468406812%, Number of plants: 160










// console.log(20*2**3)
// console.log(Math.pow(2, 3)*20) 

// switch(areaTakenPercent){
//     case areaTakenPercent > 80:
//         console.log ("Pruned")
//     case areaTakenPercent > 50:
//         console.log ("Monitored")
//     case areaTakenPercent > 0:
//         console.log ("Planted")
// }
