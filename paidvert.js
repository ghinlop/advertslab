const capCode = [
    [
        "XHeAAAIpEl", "Folder"
    ],
    [
        "XHeAAAHLEl", "Books"
    ],
    [
        "XHeAAAFQkl", "Eye"
    ],
    [
        "XHeAAAFTUl", "Swimmer"
    ],
    [
        "XHeAAAGREl", "Air"
    ],
    [
        "XHeAAAEYEl", "Coffee Cup"
    ],
    [
        "XHeAAAISkl", "Lock"
    ],
    [
        "XHeAAAHLEl", "Briefcase"
    ],
    [
        "XHeAAAFLEl", "Star"
    ],
    [
        "XHeAAAIHkl", "Music Note"
    ],
    [
        "XHeAAAFtEl", "Map"
    ],
    [
        "XHeAAAEEkl", "T-shirt"
    ],
    [
        "XHeAAAGCkl", "Bone"
    ],
    [
        "XHeAAAEkEl", "Golf Flag"
    ],
    [
        "XHeAAAAGXR", "Ping Pong"
    ],
    [
        "XHeAAAFl0l", "Apple"
    ],
    [
        "XHeAAADMkl", "Mouse"
    ],
    [
        "XHeAAAEnEl", "Bus"
    ],
    [
        "XHeAAAEpkl", "Tree"
    ],
    [
        "XHeAAAHiEl", "Woman"
    ],
    [
        "XHeAAAD7El", "Printer"
    ],
    [
        "XHeAAAE8kl", "Cloud"
    ],
    [
        "XHeAAAGRUl", "Light Bulb"
    ],
    [
        "XHeAAAKuUl", "Camera"
    ],
    [
        "XHeAAAEz0l", "Pants"
    ],
    [
        "XHeAAAFRUl", "Moon"
    ],
    [
        "XHeAAAHEEl", "Target"
    ],
    [
        "XHeAAAC5El", "Chair"
    ],
    [
        "XHeAAAFJEl", "Cat"
    ],
    [
        "XHeAAAJ3Ul", "Sun"
    ],
    [
        "XHeAAAENkl", "tank"
    ],
    [
        "XHeAAAD60l", "Pencil"
    ],
    [
        "XHeAAAGIkl", "Anchor"
    ]
]

setTimeout(function () {
    const textCap = document.getElementById('captcha');
    if (textCap !== undefined) {
        var captLoop = setInterval(function () {
            var checkVisualCapt = $(textCap).find('.visualCaptcha-explanation');
            if (checkVisualCapt) {
                var txtC = checkVisualCapt.children('strong')[0].innerText;
                var imgC = $(textCap).find('.visualCaptcha-possibilities').find('img');
                var dataCap = null;
                for (let i = 0; i < capCode.length; i++) {
                    let data = capCode[i].indexOf(txtC);
                    if (data === 1) {
                        dataCap = capCode[i];
                    }
                }
                if (dataCap !== null) {
                    for (let i = 0; i < imgC.length; i++) {
                        var imgID = $(imgC[i]).attr('id');
                        var testString = $(imgC[i])[0].currentSrc.substr(64, 10);
                        console.log(txtC)
                        console.log(testString)

                        if (testString === dataCap[0]) {
                            $(`#${imgID}`).parent().click();
                            $(`input#captcha_button`).click();
                            var clickLoop = setInterval(() => {
                                if ($('input#button')) {
                                    clearInterval(clickLoop)
                                }
                            }, 1000)
                            var sec = (issue.waiting + 1) * 1000;
                            setTimeout(() => {
                                $(`input#button`).click();
                                setTimeout(() => {
                                    $('#closeBtn').click();
                                }, 2000)
                            }, sec)
                        }
                    }
                    clearInterval(captLoop)
                } else {
                    setTimeout(() => {
                        $('.visualCaptcha-refresh-button').find('a').click();
                    }, 1000)
                }
            }
        }, 6000);
        
    }
}, 2000)