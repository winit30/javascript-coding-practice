function getMaxProfit(prices) {
    // Your code here
    let buy = Infinity;
    let profit = 0;

    for(let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        buy = Math.min(buy, currentPrice);
        profit = Math.max(profit, currentPrice - buy);
    }
    return profit;
}

let findBuySellStockPrices = function(stockNums) {
  if (!stockNums || stockNums.length < 2) {
    return;
  }

  let currentBuy = stockNums[0];
  let globalSell = stockNums[1];

  let globalProfit = globalSell - currentBuy;

  let currentProfit = 0;

  for (let i = 1; i < stockNums.length; i++) {

    currentProfit = stockNums[i] - currentBuy;

    if (currentProfit > globalProfit) {
      globalProfit = currentProfit;
      globalSell = stockNums[i];
    }

    console.log(globalProfit, globalSell);

    if (currentBuy > stockNums[i]) {
      currentBuy = stockNums[i];
    }
  }

  return [globalSell - globalProfit, globalSell];
};

var stock_nums = [[1, 2, 3, 4, 3, 2, 1, 2, 5], [8, 6, 5, 4, 3, 2, 1], [12, 30, 40, 90, 110], [2]];
