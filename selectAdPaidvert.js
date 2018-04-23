$(document).ready(function () {
    var getPaidAd = $('#paidAds').find('a');
    if (getPaidAd.length > 0) {
        var getPaidAdID = $(getPaidAd[0]).attr('id');
        var getBtnType = getPaidAdID.substr(0, 5);
        console.log(getBtnType)
        if (getBtnType === 'view-') {
            console.log(getPaidAdID)
            $(`#${getPaidAdID}`)[0].click()
        }
    } else {
        var getAd = $('#activationAds').find('a');
        if (getAd.length > 0) {
            for (let i = 0; i < getAd.length; i++) {
                let aHref = getAd[i].href;
                window.location.href = aHref;
            }
        }
    }
    $('#copy-1').click();
    $('#copy-2').click();
    $('#copy-3').click();
    $('#view_ad').click();
    var getSec = $('.alert.alert-info.no-margin-bottom')[0].innerText;
    var sec = (parseInt(getSec.match(/\d+/)[0]) + 60) * 1000;
    setTimeout(() => {
        $('#new_ad').click();
    }, sec);
})