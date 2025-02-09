const React = require("react");
const { Box } = require("ink");

const importJsx = require("import-jsx");
const IntroTitle = importJsx("./IntroTitle");

const DefaultBox = ({ children }) => {
	return (
		<Box
			borderColor="magenta"
			borderStyle="bold"
			justifyContent="column"
			flexDirection="colum"
		>
			<IntroTitle />
			{children}
		</Box>
	);
};

module.exports = DefaultBox;