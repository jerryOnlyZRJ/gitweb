const path = require("path");
module.exports = {
	mode: "production",
	output: {
		filename: "scripts/[name].[hash:5].bundle.js"
	},
	plugins: [],
}