browser.runtime.onInstalled.addListener((details) => {
	const reason = details.reason;
	switch (reason) {
		case 'install':
			browser.tabs.create({
				url: 'background/install.html',
			});
			break;
		case 'update':
			//detect extension update
			break;
		case 'browser_update':
			//detect browser update
			break;
	}
	browser.storage.sync.set({ hello: 'world' });
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.type === 'test') {
		console.log('Received message from content script');
		sendResponse('Service worker running.');
	}
});
