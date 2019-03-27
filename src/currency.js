document.addEventListener("DOMContentLoaded", function(){

  //
  //----This function returns the count of coin combinations (242)----//
  //
  // let cents = 100
  //
  // function coinCounter(total) {
  //   let count = 0
  //   let coins = [1,5,10,25]
  //
  //
  //   const coinCombinations = function(index,amountLeft){
  //
  //     let currentCoin = coins[index];
  //
  //     if(index === 0){
  //       if(amountLeft % currentCoin === 0 ){
  //         count++
  //       }
  //       return
  //     }
  //     while(amountLeft >= 0){
  //       coinCombinations(index-1, amountLeft)
  //       amountLeft -= currentCoin
  //     }
  //
  //   }
  //   coinCombinations(coins.length-1, total)
  //   return count
  // }
  //
  // console.log(coinCounter(cents));


  //----This function I am currently working on to output all the possible combinations of coins----//

//   let cents = 10
//
//   function coinCounter(total) {
//     let count = 0
//     let coins = [1,5]
//     let coinObject = {"Quarter":0, "Dime":0, "Nickel":0, "Penny":0}
//     let combinations = []
//
//     const coinCombinations = function(index,amountLeft){
//
//       if(index === 0){
//         if(amountLeft % coins[index] === 0 ){
//           console.log(index);
//           console.log(10%3);
//           count++
//         }
//         return
//       }
//
//       while(amountLeft >= 0){
//         console.log(index);
//           coinCombinations(index-1, amountLeft)
//           //combinations.push([coins[index], amountLeft ]);
//           amountLeft -= coins[index];
//       }
//     }
//     coinCombinations(coins.length-1, total)
//     return count
//   }
//
// console.log(coinCounter(cents));


// Dynamic programming try

function coinChange(amount, denominations){
  let combinations = []
  combinations[0] = 1
  for(coin in denominations)
}



})
