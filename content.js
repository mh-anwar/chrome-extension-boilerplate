console.log('Content script is running!');

// Storage demo
const getHelloWorld = async () => {
  const helloWorld = await chrome.storage.sync.get('hello');
  console.log('Hello ' + helloWorld.hello + '. Storage Works');
};

// Message passing demo
const passMessage = async () => {
  const result = await chrome.runtime.sendMessage({
    type: 'test',
    query: 'Is the service worker running?',
  });
  console.log(result + ' Message Passing Works');
};

// Fetching local resources demo
const fetchData = async () => {
  fetch(chrome.runtime.getURL('randomData.json'))
    .then((response) => response.text())
    .then((data) => console.log('The data retreived is: ' + data));
};

getHelloWorld();
passMessage();
fetchData();
