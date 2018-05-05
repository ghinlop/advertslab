$(document).ready(function () {
	document.charset = 'UTF-8'
	var urlCurrent = document.location.href;
	var getBalance = $('.balancelist');
	var balance = $(getBalance[1]).text().split(' ')[0]
	if(balance > 5) console.log(balance);
	if (/surfing/.test(urlCurrent)) {
		getNewLinkAd().then(data => {
			if(data){
				location.reload();
			}
		}).catch(err => {
			let time = 0;
			let timeLoadTitle = setInterval(()=>{
				$('title').text(`${time} giây`);
				time++;
				if(time === err){
					$('title').text(`refresh`);
					location.reload();
					clearInterval(timeLoadTitle)
				}
			}, 1000)
			
		})
	}
})

function getNewLinkAd() {
	return new Promise((success, err) => {
		var aLink = $('.surflink').find('a.surflinkgoto.waves-effect')
		if(aLink.length > 0){
			$(aLink[0]).click();
			let time = 20;
			let timeLoadTitle = setInterval(()=>{
				$('title').text(`${time} giây`);
				time--;
				if(time === 0){
					$('title').text(`refresh`);
					success('refresh')
					clearInterval(timeLoadTitle)
				}
			}, 1000)
		}else{
			err(60)
		}
	})
}