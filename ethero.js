const _url = document.location.href.split(/\//);
let congtac = false;

$('style').remove()
$('head script').remove()
$(document).ready(()=>{
    if (_url[3] === 'ads') {
        let _ad = $('.adspage a');
        let _arr = new Array();
        if (_ad.length > 0) {
            for (let i = _ad.length - 1; i >= 0 ; i--) {
                let classLeng = $(_ad[i]).find('.hap').attr('class');
                // _log(classLeng.split(/\s/))
                if (classLeng !== undefined) {
                    let _classList = classLeng.split(/\s/);
                    // _log(_classList[1])
                    if(_classList.length < 3 && _classList[1] !== 'disabled_pbx'){
                        // _log($(_ad[i]).attr('href'))
                        _arr.push($(_ad[i]).attr('href').toLowerCase())
                    }
                }
            }
            // _log(_arr)
        }
        if(_arr.length === 0){
            $('body').html(`
                <h1 id="status_reload" style="background-color: #fff; color: #0088dd; text-align: center; margin-bottom: 0"></h1>
            `)
            let i = 60;
            let _timeout = setInterval(function(){
               if(i > 0){
                $('#status_reload').html(`Còn: ${i} giây sẽ Reload`)
                i--
               }else{
                   location.reload();
                   clearInterval(_timeout)
               }
            },1000)
        }
        if (_arr.length > 0) {
            location.href = _arr[0];
        }
    }
    if (_url[3] === 'modules') {
        $('body').html(`
        <div id="headadx" style="height: 10px; color: #000important;">
            <div id="desc"></div>
            <div id="bar" style="background-color: #000; padding: 30px 0;">
                <div id="barload"></div>
            </div>
        </div>
        `)
        let _arr = new Array();
        let _id = _url[4].split(/\?ad\=/)[1].split(/\&mask\=/)[0]
        let loopgetAdd = setInterval(function () {
            if (view >= settimeout) {
                let result = $.ajax({
                    type: "GET",
                    url: `http://ethero.net/modules/virtual_core.php?adv=${_id}&action=adv`,
                    async: false
                }).responseText;
                _log(result)
                $('#desc').html(result)
                if (result === "Completed!" || result === "You already clicked to this ad!") {
                    clearInterval(loopgetAdd)
                    document.location.href = 'http://ethero.net/ads'
                }
            } else {
                view = view + 1000;
                var width = (view * 100) / settimeout;
                $('#barload').animate({
                    width: width + '%'
                });
                $('#desc').html(width + "%")
            }
        }, 1000)
    }
})


function _log(data) {
    console.log(data)
}