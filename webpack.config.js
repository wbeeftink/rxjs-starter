const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	devServer: {
		publicPath: "/dist/",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
