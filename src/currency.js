document.addEventListener("DOMContentLoaded", function(){
  //
  // let cents = 100
  // let denominations = [25, 10 , 5, 1]
  // let coinCombinations = []
  //
  // function coinCounter(amountLeft, i, combinations, addcoins){
  //   if addcoins.push(addcoins)
  //   if (amountLeft === 0 || (i+1) === denominations.length){
  //     if(i+1 === denominations.length && amountLeft > 0){
  //       combinations.push((amountLeft,denominations[i]))
  //       i += 1
  //     }
  //     while (i < denominations.length){
  //       i += 1
  //       console.log(combinations);
  //     }
  //   }
  //   let currentCoin = denominations[i]
  //
  // }

  // let cents = 100
  //
  // function coinCounter(total) {
  //   let count = 0
  //   let coins = [1,5,10,25]
  //   let combinations = {"Quarter":0, "Dime":0, "Nickle":0, "Penny":0}
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


  let cents = 100

  function coinCounter(total) {
    let count = 0
    let coins = [1,5,10,25]
    let coinObject = {"Quarter":0, "Dime":0, "Nickle":0, "Penny":0}
    let combinations = []

    const coinCombinations = function(index,amountLeft){

      let currentCoin = coins[index];

      if(index === 0){
        if(amountLeft % currentCoin === 0 ){
          combinations.push([currentCoin, amountLeft])
          console.log(combinations);
          count++
        }
        return
      }
      while(amountLeft >= 0){
        coinCombinations(index-1, amountLeft)
        combinations.push([currentCoin, 0])
        //console.log(combinations);
        amountLeft -= currentCoin
      }
      
    }
    coinCombinations(coins.length-1, total)
    return count
  }

console.log(coinCounter(cents));

})
