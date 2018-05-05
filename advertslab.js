setInterval(function () {
    var getURL = document.location.href.split('.com/')[1];
    var clickURL = getURL.split('?ad=')[0]
    if ($('.ads_btn_all').length > 0) {
        $('.ads_btn_all')[0].click()
    }
    if ($('iframe').length > 0) {
        var conAD = getURL.split('?ad=');
        var idAd = conAD[1].split('&adin=')
        if (conAD[0] === 'viewthebonus.php') {
            axj('inc/ba154267fssdcgd5pemd1.php', idAd, "bonusadpoints.php")
        }
        if (conAD[0] === 'viewthead.php') {
            axj('inc/edenf254264sxvfsdcw6254.php', idAd, "paidads.php")
        }
    }
}, 1000)

function axj(url, id, callback) {
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            theadsid1: id[0],
            thesourceid: parseInt(id[1])
        },
        dataType: 'JSON',
        beforeSend: function () {
            document.getElementById("body_headerviewads_confirm_button_contain").innerHTML = "<img id='allpageinside_loadimg_paidads' src='img/loading.gif'>";
        },
        success: function (rep) {
            if (rep[0] == "done") {
                document.location.href = callback;
            }
        }
    });
}