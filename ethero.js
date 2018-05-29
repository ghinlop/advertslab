$(document).ready(function () {
    const getAllAd = $('.adspage a');
    let AddID_arr = [];
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
    }

    let _url = document.location.href.split('.net/')[1]
    if (_url === 'ads') {
        document.location.href = AddID_arr[0]._url
    } else {
        $('iframe').remove()
        let _url = document.location.href.split('?ad=')[1].split('&mask=')[0]
        let loopgetAdd = setInterval(function () {
            let result = $.ajax({
                type: "GET",
                url: `http://ethero.net/modules/virtual_core.php?adv=${_url}&action=adv`,
                async: false
            }).responseText;
            console.log(`Đang xem ${_url} - Tình Trạng: ${result}`)
            if ( result === "Completed") {
                console.log(`Thành công!`)
                document.location.href = 'http://ethero.net/ads'
            }
        }, 10000)
    }
})