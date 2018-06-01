// $('head').append(`<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>`)
const _url = document.location.href.split(/\//);
let congtac = false;

$('style').remove()
$('head script').remove()
$('img').remove()
$(document).ready(()=>{
    if (_url[3] === 'ads') {
        let _ad = $('.adspage a');
        let _arr = new Array();
        if (_ad.length > 0) {
            for (let i = 0; i < _ad.length; i++) {
                let classLeng = $(_ad[i]).find('.hap').attr('class');
                _log(classLeng)
                if (classLeng !== undefined) {
                    if(classLeng.split(/\s/).length < 3){
                        _arr.push($(_ad[i]).attr('href'))
                    }
                }
            }
            _log(_arr)
        }else{
    
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
            location.href = `http://bitcofarm.com/${_arr[0]}`
        }
    }
    if (_url[3] === 'modules') {
        let _arr = new Array();
        let _id = _url[4].split(/\?ad\=/)[1].split(/\&mask\=/)[0]
        $('iframe').remove()
        let loopgetAdd = setInterval(function () {
            if (view >= settimeout) {
                let result = $.ajax({
                    type: "GET",
                    url: `http://bitcofarm.com/modules/virtual_core.php?adv=${_id}&action=adv`,
                    async: false
                }).responseText;
                _log(result)
                $('#desc').html(result)
                if (result === "Completed!" || result === "Already Clicked!") {
                    document.location.href = 'http://bitcofarm.com/ads'
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