var time = 0;
$('iframe').remove();
var Capt = getNumberCapt('captcha_btn');
Capt.then((data) => {
	for (let num of data) {
		GetClick(num)
	}
})

function GetClick(cptcode) {
	return new Promise((resolve, reject) => {
		var xmlh = getXMLHTTP();
		xmlh.onreadystatechange = function () {
			if (xmlh.readyState == 4 && xmlh.status == 200) {
				if (xmlh.responseText != 'time_error' && xmlh.responseText != 'create_error' && xmlh.responseText != 'captcha_error' && xmlh.responseText != 'balance_error') {
					window.open('', '_self').close();
				}
			}
		};
		xmlh.open("GET", "/ajax/serf.php?id=" + clickid + "&hex=909884323070592&cpt=" + cptcode, true);
		xmlh.setRequestHeader("Content-Type", "text/xml")
		xmlh.send();
	})
}
function getNumberCapt(data, callback) {
	return new Promise((result, err) => {
		let CaptGetLoop = setInterval(() => {
			let capt = $(`.${data}`);
			var captArray = [];
			if (capt.length > 1) {
				for (let i = 0; i < capt.length; i++) {
					captArray.push($(capt[i]).text())
				}
				result(captArray)
				clearInterval(CaptGetLoop)
			}
		}, 1000);
	})
}
