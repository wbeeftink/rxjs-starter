const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: "./src/index.ts",
	devServer: {
		static: {
			directory: "./dist",
		},
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
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		publicPath: "/",
	},
};
