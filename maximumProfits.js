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
