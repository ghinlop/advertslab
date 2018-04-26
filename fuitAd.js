$(document).ready(function () {
	var urlCurrent = document.location.href;
	console.log(urlCurrent)
	if (/surfing/.test(urlCurrent)) {
		getNewLinkAd().then(data => {
			if(data){
				location.reload();
			}
		}).catch(err => {
			let time = 0;
			let timeLoadTitle = setInterval(()=>{
				console.log(time)
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