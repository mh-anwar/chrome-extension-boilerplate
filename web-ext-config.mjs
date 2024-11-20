// (Default) Configuration file for running web-ext in Chromium (npm run dev)
// See command reference/options here: https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-run
export default {
	ignoreFiles: ['package-lock.json', 'yarn.lock'],
	build: {
		overwriteDest: true,
	},
	verbose: false,
	// run: { chromiumProfile: '/PATH/TO/YOUR/CHROME/PROFILE' },
	// Uncomment line above to use custom chromium profile
};
