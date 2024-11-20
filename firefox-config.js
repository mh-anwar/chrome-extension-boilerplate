// Configuration file for running web-ext in Firefox (npm run dev:firefox)
// See command reference/options here: https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-run
module.exports = {
	ignoreFiles: ['package-lock.json', 'yarn.lock'],
	build: {
		overwriteDest: true,
	},
	verbose: false,
	// run: { firefoxProfile: '/PATH/TO/YOUR/FIREFOX/PROFILE' },
	// Uncomment line above to use custom firefox profile
};
