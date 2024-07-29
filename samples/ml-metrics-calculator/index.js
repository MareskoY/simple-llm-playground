import * as math from 'mathjs';
import chalk from 'chalk';

// test data
const trueValues = [3, -0.5, 2, 7];
const predictions = [2.5, 0.0, 2, 8];

// MAE (Mean Absolute Error)
function calculateMAE(trueValues, predictions) {
    const errors = trueValues.map((value, index) => Math.abs(value - predictions[index]));
    const mae = math.mean(errors);
    return mae;
}

// MAPI (Mean Absolute Percentage Error)
function calculateMAPI(trueValues, predictions) {
    const errors = trueValues.map((value, index) => Math.abs((value - predictions[index]) / value));
    const mapi = math.mean(errors) * 100;
    return mapi;
}

// R² (R-squared)
function calculateRSquared(trueValues, predictions) {
    const meanTrue = math.mean(trueValues);
    const ssTotal = trueValues.reduce((sum, value) => sum + Math.pow(value - meanTrue, 2), 0);
    const ssRes = trueValues.reduce((sum, value, index) => sum + Math.pow(value - predictions[index], 2), 0);
    const rSquared = 1 - (ssRes / ssTotal);
    return rSquared;
}

const mae = calculateMAE(trueValues, predictions);
console.log( chalk.green(`MAE: ${mae}`));

const mapi = calculateMAPI(trueValues, predictions);
console.log(chalk.blue(`MAPI: ${mapi}%`));

const rSquared = calculateRSquared(trueValues, predictions);
console.log(chalk.red(`R²: ${rSquared}`));
