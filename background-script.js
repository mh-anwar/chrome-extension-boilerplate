var title = "YAYAYAYAYAY";
var today = new Date();

var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var hrs = today.getHours()
var min = today.getMinutes()
var time = hrs + ' ' + min
var sec = today.getSeconds();
var dateTime = date
if (hrs == "20") {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("icons/link-48.png"),
    "title": title,
    "message": dateTime
  });
}
console.log(min)