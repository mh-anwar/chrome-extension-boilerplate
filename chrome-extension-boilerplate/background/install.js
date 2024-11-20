function requestPerms() {
	chrome.permissions.request(
		{
			origins: ['<all_urls>'],
		},
		function (granted) {
			if (granted) {
				alert('Host permissions have been granted.');
			} else {
				alert('Host permissions have been denied.');
			}
		}
	);
}

chrome.permissions.contains(
	{
		origins: ['<all_urls>'],
	},
	function (result) {
		if (result) {
			document.getElementById('permissions_alert').style.display = 'none';
		} else {
			document
				.getElementById('provide_perms')
				.addEventListener('click', requestPerms);
		}
	}
);
