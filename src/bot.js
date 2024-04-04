console.clear();

require("dotenv").config();

const { PublicKey } = require("@solana/web3.js");

const fs = require("fs");
const { setup } = require("./setup");

const { calculateProfit, toDecimal, toNumber } = require("./utils");
const { handleExit } = require("./exit");
const ora = require("ora-classic");
const { clearInterval } = require("timers");
const printToConsole = require("./ui");

// read config.json file

const configSpinner = ora({
	text: "Loading config...",
	discardStdin: false,
}).start();

const config = JSON.parse(fs.readFileSync("./config.json"));
configSpinner.succeed("Config loaded!");

//cache

const cache = {
    startTime: new Date(),
    firstSwap: true,
    firstSwapInQueue: false,
    queue: {},
    queueThrottle: 1,
    sideBuy: true,
    iteration: 0,
    iterationPerMinute: {
        start: performance.now(),
        value: 0,
        counter: 0,
    },
    initialBalance: {
        tokenA: 0,
        tokenB: 0,
    },

    currentBalance: {
        tokenA: 0,
        tokenB: 0,
    }
    
}