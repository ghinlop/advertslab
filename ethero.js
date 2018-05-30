$(document).ready(function () {
    startit = 1
    control = 1
    let _url = document.location.href.split('.net/')[1]
    if (_url === 'ads') {
        const getAllAd = $('.adspage a');
        let AddID_arr = [];
        let point_total, 
        ad_total = getAllAd.length;
        if(getAllAd.length > 0){
            for (let i = 0; i < getAllAd.length; i++) {
                let data = {
                    _url: '',
                    _id: ''
                };
                let check_ad = $(getAllAd[i]).find('.hap')[0].classList.length
                if (check_ad === 1) {
                    data._url = $(getAllAd[i]).attr('href');
                    data._id = $(getAllAd[i]).find('.hap')[0].id
                    AddID_arr.push(data)
                }
                point_total += $(getAllAd[i]).find('.shap').text().split(" " )[0]
            }
            console.log(ad_total, point_total)
            document.location.href = AddID_arr[0]._url
        }else{
            setTimeout(function(){
                location.reload();
            }, 60000)
        }
        
    } else {
        $('iframe').remove()
        let _url = document.location.href.split('?ad=')[1].split('&mask=')[0]
        let loopgetAdd = setInterval(function () {
            if (view == settimeout) {
                let result = $.ajax({
                    type: "GET",
                    url: `http://ethero.net/modules/virtual_core.php?adv=${_url}&action=adv`,
                    async: false
                }).responseText;
                $('#desc').html(result)
                if (result === "Completed") {
                    document.location.href = 'http://ethero.net/ads'
                }
            } else {
                view = view + 1000;
                var width = (view * 100) / settimeout;
                $('#barload').animate({ width: width + '%' });
                $('#desc').html(width + "%")
            }
        }, 1000)
    }
})