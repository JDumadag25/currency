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

  let cents = 10

  function coinCounter(total) {
    let count = 0
    let coins = [1,5]
    //was gonna use this to potentally keep track of amounts, have not used this yet.
    let coinObject = {"Quarter":0, "Dime":0, "Nickel":0, "Penny":0}
    let combinations = []

    const coinCombinations = function(index,amountLeft){

      if(index === 0){
        if(amountLeft % coins[index] === 0 ){
          //trying to keep track of the coin value and the amount left that needs to be taken care of
          combinations.push([coins[index], amountLeft])
          //console.log(combinations);
          //combos show up but not really what I am looking for. 
          count++
        }
        return
      }

      while(amountLeft >= 0){
          //trying to keep track of the coin value and the amount left that needs to be taken care of, this is where I am getting stuck at
          //I need to find a way to change the total with my new coin denomination i.e. after 10 pennies, now its 5 pennies and 1 nickel.
          //for loop with a range of 0 to 2 then call the recursive function?.
          //using smaller amounts and denominations for ease of debugging
          coinCombinations(index-1, amountLeft)
          combinations.push([coins[index], amountLeft ]);
          amountLeft -= coins[index];
      }
    }
    coinCombinations(coins.length-1, total)
    return count
  }

console.log(coinCounter(cents));


})
