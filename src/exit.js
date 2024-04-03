const fs = require("fs");

exports.handleExit = (config, cache) => {
	try {
		fs.writeFileSync("./temp/cache.jso", JSON.stringify(cache, null, 2));
		fs.writeFileSync(
			"./temp/blockedAMMs.json",
			JSON.stringify(cache.tradehistory, null, 2)
		);

		fs.writeFileSync(
			"./temp/tradeHistory.json",
			JSON.stringify(cache.tradehistory, null, 2)
		);

		delete cache.tradehistory;
		delete cache.blockedAMMs;

		fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));
	} catch (error) {
		console.log(error);
	}
};
