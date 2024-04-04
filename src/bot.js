console.clear()

require("dotenv").config()

const { PublicKey } = require("@solana/web3.js")

const fs = require("fs");
const { setup } = require("./setup");

const { calculateProfit, toDecimal, toNumber } = require("./utils");
const { handleExit } = require("./exit");
const ora = require("ora-classic");
const { clearInterval } = require("timers");
const printToConsole = require("./ui")

