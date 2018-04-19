$(document).ready(() => {
    const urls = ['bonusadpoints', 'paidads'];
    let BapAd = [];
    let MoneyAd = [];
    for (let url of urls) {
        if (url === 'bonusadpoints') {
            getAdBAP(url)
        }
        if (url === 'paidads') {

        }
    }
});

function getAdBAP(url) {
    let AdBAPLink = []
    $.ajax({
        url: `https://advertslab.com/${url}.php`,
        type: 'GET',
        dataType: 'html'
    }).done(function (data) {
        let DataArray = $(data).find('#pad_pageindx_c_mxinside_allads').find('a');
        let AdArray = [];
        if (DataArray && DataArray.length > 0) {
            for (let i = 0; i < DataArray.length; i++) {
                let data = $(DataArray[i]).attr('href');
                AdBAPLink.push(data);
            }
            if (AdBAPLink.length > 0) {
                for (let url of AdBAPLink) {
                    getBapID(url)
                }
            }
        }
    })
}

function getBapID(url) {
    $.ajax({
        url: `https://advertslab.com/${url}`,
        type: 'GET',
        dataType: 'html'
    }).done(function (data) {
        let dataBapAD = [];
        let valueDataAd = new Array();
        let temp = new Array();
        temp = $(data)
            .find('#allpageinside_allthepage_inside_pagein_viewadsporter a')
            .attr('href').split('.php?ad=')[1];
        item = temp.split('&adin=');
        valueDataAd.push({
            theadsid1get: item[0],
            thesourceidget: item[1]
        })
        if (valueDataAd.length > 0) {
            for(let item of valueDataAd){
                setTimeout(PostBAP(item.theadsid1get, item.thesourceidget), 1000); 
            }
        }
    })
}
function PostBAP(theadsid1get, thesourceidget) {
    var theadsid1 = theadsid1get;
    var thesourceid = parseInt(thesourceidget);
    $.ajax({
        type: 'POST',
        url: 'inc/ba154267fssdcgd5pemd1.php',
        data: {
            theadsid1: theadsid1,
            thesourceid: thesourceid
        },
        dataType: 'JSON',
        success: function (rep) {
            console.log(rep[0])
        }
    });
}