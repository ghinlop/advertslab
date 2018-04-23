$(document).ready(function(){
    var getAd = $('#activationAds').find('a');
    if(getAd.length  > 0){
        for(let i = 0; i < getAd.length; i++){
            let aHref = getAd[i].href;
            window.location.href = aHref;
        }
    }else{
        alert('No Ad Need View')
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