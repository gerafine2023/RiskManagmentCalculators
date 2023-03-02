const tooltipElems = document.querySelectorAll('.tooltip');
tooltipElems.forEach((elem) => {
  elem.addEventListener('click', (e) => {
    e.preventDefault(); // prevent the link from being followed
    // display the tooltip content
    const tooltipContent = elem.dataset.tooltip;
    elem.setAttribute('aria-label', tooltipContent);
    elem.classList.add('tooltip-active');
  });
});

// hide the tooltip when clicked outside
document.addEventListener('click', (e) => {
  if (!e.target.matches('.tooltip') && !e.target.closest('.tooltip')) {
    const tooltipElems = document.querySelectorAll('.tooltip');
    tooltipElems.forEach((elem) => {
      elem.classList.remove('tooltip-active');
      elem.removeAttribute('aria-label');
    });
  }
});


/*
script for page RBA: Risk By Amount
*/


const form = document.querySelector('#risk-amount-form');
if (form) {
const calculateButton = document.querySelector('#calculate-button');
const positionSizeResult = document.querySelector('#position-size-result');

calculateButton.addEventListener('click', (event) => {
  event.preventDefault();

  const riskAmount = parseFloat(document.querySelector('#risk-number-input').value);
  const stopLossPercentage = parseFloat(document.querySelector('#stoploss-number-input').value) / 100;

  const positionSize = riskAmount / stopLossPercentage;

  positionSizeResult.textContent = `Position Size: ${positionSize.toFixed(2)}`;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
  });

}

/*
script for page RBP: Risk By Percentage
*/

// This block of code only runs if "formPerc" exists. It gets several HTML elements with specific IDs and assigns them to corresponding variables.

const formPerc = document.querySelector('#risk-Percentage-form');
if (formPerc) {
const calculateButtonPerc = document.querySelector('#calculate-button-p');
const positionSizeResultPerc = document.querySelector('#position-size-result-p');
const profitResultPerc = document.querySelector('#profit-result-p');
const lostOutputPerc = document.querySelector('#loss-result-p');
const marketPriceLostOutput = document.querySelector('#market-price-at-stoploss-result-p');
const marketPriceProfittOutput = document.querySelector('#market-price-at-takeprofit-result-p');

  // This line adds an event listener to the "calculateButtonPerc" element. When it is clicked, the function inside the listener will run.
calculateButtonPerc.addEventListener('click', (event) => {
    event.preventDefault();

  // These lines get the values of various input fields, convert them to floats, and assign them to corresponding variables.
    const totalBalancePerc = parseFloat(document.querySelector('#total-balance-input').value);
    const riskPerc = parseFloat(document.querySelector('#risk-percentage-input').value) / 100;
    const stopLossPercentagePerc = parseFloat(document.querySelector('#stop-loss-percentage-input').value) / 100;
    const takeProfitPercentagePerc = parseFloat(document.querySelector('#take-profit-percentage-input').value) / 100;
    const entryPricePerc = parseFloat(document.querySelector('#entery-price-input').value);

 // These lines perform calculations using the input values and assign the results to corresponding variables.
    const positionSizeOutPut = (totalBalancePerc * riskPerc) / stopLossPercentagePerc;
    const profitOutput = (positionSizeOutPut * takeProfitPercentagePerc);
    const lostOutput = (positionSizeOutPut * stopLossPercentagePerc);
    const coinPriceAtLost = entryPricePerc - (entryPricePerc * stopLossPercentagePerc);
    const coinPriceAtProfit = entryPricePerc + (entryPricePerc * takeProfitPercentagePerc);
    
  // These lines update the text content of various HTML elements with the calculated values.
    positionSizeResultPerc.textContent = `Position Size: ${positionSizeOutPut.toFixed(2)}`;
    profitResultPerc.textContent = `My Profit: ${profitOutput.toFixed(2)}`;
    lostOutputPerc.textContent = `My Lost: ${lostOutput.toFixed(2)}`;
    marketPriceLostOutput.textContent = `Market Price At Stop Loss: ${coinPriceAtLost.toFixed(2)}`;
    marketPriceProfittOutput.textContent = `Market Price At Take Profit: ${coinPriceAtProfit.toFixed(2)}`;

});
 // This line adds an event listener to the "formPerc" element. When it is submitted, the function inside the listener will run.
formPerc.addEventListener('submit', (event) => {
  event.preventDefault();
});

}
