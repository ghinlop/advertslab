$(document).ready(() => {
    const urls = ['bonusadpoints', 'paidads'];
    let adContentData = {};
    for (let url of urls) {
        if (url === 'bonusadpoints') {
            var urlPOST = 'ba154267fssdcgd5pemd1'
            getAds(url,'#pad_pageindx_c_mxinside_allads', urlPOST)
        }
        if (url === 'paidads') {
            var urlPOST = 'edenf254264sxvfsdcw6254'
            getAds(url,'.pad_pageindx_c_mxinside_exp_allad', urlPOST)
        }
    }
    document.location.url = 'https://advertslab.com/';
});

function getAds(url, idFinder, data) {
    let AdBAPLink = [];
    let urlPOST = data;
    $.ajax({
        url: `https://advertslab.com/${url}.php`,
        type: 'GET',
        dataType: 'html'
    }).done(function (data) {
        let DataArray = $(data).find(`${idFinder}`).find('a');
        if (DataArray && DataArray.length > 0) {
            for (let i = 0; i < DataArray.length; i++) {
                let data = $(DataArray[i]).attr('href');
                AdBAPLink.push(data);
            }
            console.log(AdBAPLink)
            if (AdBAPLink.length > 0) {
                for (let url of AdBAPLink) {
                    getAdID(url, urlPOST)
                }
            }
        }
    })
}

function getAdID(url, urlP) {
    $.ajax({
        url: `https://advertslab.com/${url}`,
        type: 'GET',
        dataType: 'html'
    }).done(function (data) {
        let dataBapAD = [];
        let valueDataAd = []
        , temp = [];
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
                setTimeout(PostBAP(item.theadsid1get, item.thesourceidget, urlP), 1000); 
            }
        }
    })
}
function PostBAP(theadsid1get, thesourceidget, data) {
    let urlPOST = data;
    var theadsid1 = theadsid1get;
    var thesourceid = parseInt(thesourceidget);
    $.ajax({
        type: 'POST',
        url: `inc/${urlPOST}.php`,
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