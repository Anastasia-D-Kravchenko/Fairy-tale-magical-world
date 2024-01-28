$("#future").click(function() {
    // window.location.href = 'main.html';
    $(location).attr('href', 'main.html');
});

function sunrise() {
    $("#imgsun").fadeIn("slow");
    $("#imgsun").animate({
        top: '-20px'
    }, "slow");
}

function sunset() {
    $("#imgsun").animate({
        top: '270px'
    }, "slow");
    $("#imgsun").fadeOut("slow");
}

function cloudsrise() {
    $(".cloudy1").animate({
        left: '82%',
        bottom: '86%'
    }, "slow");
    $(".cloudy2").animate({
        left: '67%',
        bottom: '64%'
    }, "slow");
    $(".cloudy3").animate({
        left: '70%'
    }, "slow");
    $("#opor").click(function() {
        $(location).attr('href', 'right.html');
    });
}

function cloudsset() {
    $(".cloudy1").animate({
        left: '77%',
        bottom: '73%'
    }, "slow");
    $(".cloudy2").animate({
        left: '85%',
        bottom: '83%'
    }, "slow");
    $(".cloudy3").animate({
        left: '73%'
    }, "slow");
}

function cloudsrise1() {
    $(".cloudy4").animate({
        left: '16%',
        bottom: '4%'
    }, "slow");
    $(".cloudy5").animate({
        left: '16%',
        bottom: '26%'
    }, "slow");
    $(".cloudy6").animate({
        left: '1%',
        bottom: '28%'
    }, "slow");
    $("#opor1").click(function() {
        $(location).attr('href', 'left.html');
    });
}

function cloudsset1() {
    $(".cloudy4").animate({
        left: '8%',
        bottom: '7%'
    }, "slow");
    $(".cloudy5").animate({
        left: '16%',
        bottom: '17%'
    }, "slow");
    $(".cloudy6").animate({
        left: '5%',
        bottom: '17%'
    }, "slow");
}
wid = window.innerWidth
if(wid>500){
    function cloudsrise2() {
        $("#fon0").animate({
            left: '7%',
            top: '3%'
        }, 1000);
        $("#fon1").animate({
            left: '7%',
            top: '61%'
        }, 1000);
        $("#fon2").animate({
            left: '78%',
            top: '3%'
        }, 1000);
        $("#fon3").animate({
            left: '78%',
            top: '61%'
        }, 1000);
        $(".a0").animate({
            left: '13%',
            top: '20%'
        }, 1000);
        $(".a1").animate({
            left: '13%',
            top: '74%'
        }, 1000);
        $(".a2").animate({
            left: '84%',
            top: '20%'
        }, 1000);
        $(".a3").animate({
            left: '84%',
            top: '74%'
        }, 1000);
    }
    function cloudsset2() {
        $("#fon0").animate({
            left: '-20%',
            top: '-20%'
        }, 1000);
        $("#fon1").animate({
            left: '-20%',
            bottom: '-20%'
        }, 1000);
        $("#fon2").animate({
            left: '100%',
            top: '-20%'
        }, 1000);
        $("#fon3").animate({
            left: '100%',
            bottom: '-20%'
        }, 1000);
    }
}else{
    function cloudsrise2() {
        $("#fon0").animate({
            left: '13%',
            top: '12%'
        }, 1000);
        $("#fon1").animate({
            left: '13%',
            top: '84%'
        }, 1000);
        $("#fon2").animate({
            left: '73%',
            top: '12%'
        }, 1000);
        $("#fon3").animate({
            left: '73%',
            top: '84%'
        }, 1000);
        $(".a0").animate({
            left: '13%',
            top: '12%'
        }, 1000);
        $(".a1").animate({
            left: '13%',
            top: '84%'
        }, 1000);
        $(".a2").animate({
            left: '73%',
            top: '12%'
        }, 1000);
        $(".a3").animate({
            left: '73%',
            top: '84%'
        }, 1000);
    }
    function cloudsset2() {
        $("#fon0").animate({
            left: '-45%',
            top: '-20%'
        }, 1000);
        $("#fon1").animate({
            left: '-20%',
            bottom: '-20%'
        }, 1000);
        $("#fon2").animate({
            left: '100%',
            top: '-20%'
        }, 1000);
        $("#fon3").animate({
            left: '100%',
            bottom: '-20%'
        }, 1000);
    }
}
setTimeout(cloudsrise2, 1200);
setTimeout(cloudsset2, 2000);
$(".a2").click(function() {
    $(location).attr('href', 'test.html');
});
$(".a3").click(function() {
    $(location).attr('href', 'play.html');
});
$(".a0").click(function() {
    $(location).attr('href', 'text.html');
});
$(".a1").click(function() {
    $(location).attr('href', 'email.html');
});
$(".restart").click(function() {
    $(location).attr('href', 'play.html');
});
$(".continues").click(function() {
    $(location).attr('href', 'right.html');
});

function del() {
    $(".a0").animate({
        width: '110px',
        height: '110px'
    }, 1000);
    $(".a0").addClass('a00');
    $('.smen0').css('animation', 'none');
}

function add() {
    $(".a0").animate({
        width: '100px',
        height: '100px'
    }, 1000);
    $(".a00").removeClass('a00');
    $('.smen0').css('animation', 'fly3 4s ease-in-out infinite');
}

function del1() {
    $(".a1").animate({
        width: '110px',
        height: '110px'
    }, 1000);
    $(".a1").addClass('a01');
    $('.smen1').css('animation', 'none');
}

function add1() {
    $(".a1").animate({
        width: '100px',
        height: '100px'
    }, 1000);
    $(".a01").removeClass('a01');
    $('.smen1').css('animation', 'fly3 4s ease-in-out infinite');
}

function del2() {
    $(".a2").animate({
        width: '120px',
        height: '120px'
    }, 1000);
    $(".a2").addClass('a02');
    $('.smen2').css('animation', 'none');
}

function add2() {
    $(".a2").animate({
        width: '100px',
        height: '100px'
    }, 1000);
    $(".a02").removeClass('a02');
    $('.smen2').css('animation', 'fly3 4s ease-in-out infinite');
}

function del3() {
    $(".a3").animate({
        width: '120px',
        height: '120px'
    }, 1000);
    $(".a3").addClass('a03');
    $('.smen3').css('animation', 'none');
}

function add3() {
    $(".a3").animate({
        width: '100px',
        height: '100px'
    }, 1000);
    $(".a03").removeClass('a03');
    $('.smen3').css('animation', 'fly3 4s ease-in-out infinite');
}
var test = [];
var testText = [];
let allisall = [];
let allisallText = [];

function prov(a, b) {
    test.push(a);
    testText.push(b);
    for (i = 0; i <= 4; i++) {
        $(".as" + i).removeClass('endy1');
        if (a == 1 && i == 1) {
            $(".as" + i).addClass('endy1');
        } else if (a == 2 && i == 2) {
            $(".as" + i).addClass('endy1');
        } else if (a == 3 && i == 3) {
            $(".as" + i).addClass('endy1');
        } else if (a == 4 && i == 4) {
            $(".as" + i).addClass('endy1');
        }
    }
}

function isWantedGuest(element) {
    let guestName = 1;
    return element === guestName;
}

function isWantedGuest1(element) {
    let guestName = 2;
    return element === guestName;
}

function isWantedGuest2(element) {
    let guestName = 3;
    return element === guestName;
}

function isWantedGuest3(element) {
    let guestName = 4;
    return element === guestName;
}

function clickm(elem) {
    test1 = test.reverse();
    testText1 = testText.reverse();
    console.log(testText1)
    console.log(test1)
    a = test1.findIndex(isWantedGuest)
    if (a == -1) {
        a = 100
    }
    console.log(a)
    b = test1.findIndex(isWantedGuest1)
    if (b == -1) {
        b = 100
    }
    console.log(b)
    c = test1.findIndex(isWantedGuest2)
    if (c == -1) {
        c = 100
    }
    console.log(c)
    d = test1.findIndex(isWantedGuest3)
    if (d == -1) {
        d = 100
    }
    console.log(d)
    if (b > a && c > a && d > a) {
        console.log(testText1[a])
        allisallText.push(testText1[a])
        allisall.push(test1[a])
    } else if (a > b && c > b && d > b) {
        console.log(testText1[b])
        allisallText.push(testText1[b])
        allisall.push(test1[b])
    } else if (a > c && b > c && d > c) {
        console.log(testText1[c])
        allisallText.push(testText1[c])
        allisall.push(test1[c])
    } else if (a > d && b > d && c > d) {
        console.log(testText1[d])
        allisallText.push(testText1[d])
        allisall.push(test1[d])
    }
    console.log(allisall)
    test = [];
    testText = [];
    for (i = 0; i <= 12; i++) {
        $(".as" + i).removeClass('endy1');
        $(".as4").removeClass('endy1');
        if (i != elem) {
            document.querySelector('.bye' + i).style.display = 'none';
        } else {
            document.querySelector('.bye' + i).style.display = 'block';
        }
    }
}
let masNum = [2, 1, 1, 2, 4, 2, 1, 3];

function opor() {
    for (i = 0; i < 11; i++) {
        document.querySelector('.b' + (i + 1)).innerHTML = `${allisallText[i]}`;
        if (allisall[i] == masNum[i]) {
            document.querySelector('.b' + (i + 1)).style.color = `green`;
        } else {
            document.querySelector('.b' + (i + 1)).style.color = `red`;
        }
    }
};
let masNum1 = [1, 0, 0, 1, 3, 1, 0, 2];

function opor1() {
    for (i = 0; i < 11; i++) {
        document.querySelector('.b' + (i + 1)).innerHTML = `${allisallText[i]}`;
        if (allisall[i] == (masNum1[i] + 1)) {
            document.querySelector('.b' + (i + 1)).style.color = `green`;
        } else {
            document.querySelector('.b' + (i + 1)).style.color = `red`;
        }
    }
};
let masTex = ['Народ', 'Добро', '«Лисичка та Їжак.»', 'Пригощає', '«Дрізд і голуб»', 'Народною', '«Вовк і козлята»', 'І.Франко']

function myFunction(a) {
    var x = document.querySelector('#snackbar');
    x.innerHTML = `${masTex[a]}`;
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 7000);
}
var a = 0;
dragElement(document.getElementById("hed"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    console.log(elmnt.id)
    if (document.getElementById(elmnt.id + "main")) {
        document.getElementById(elmnt.id + "main").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log("x " + pos3, "Y " + pos4)
        wid = window.innerWidth
        console.log("S: " + wid)
        if(wid==1280){
            wid = 1;
        }else if(wid==1422){
            wid = 1.13;
        }else if(wid==1600){
            wid = 1.25;
        }else if(wid==1707){
            wid = 1.3;
        }
        if (pos3 > 100*wid && pos3 < 200*wid && pos4 > 100*wid && pos4 < 700*wid && a == 0) {
            document.getElementById("hedmain").style.backgroundImage = 'url("img/kisspng-apple-clip-art-5add79dd55e484.9577376215244640933518.png")';
            document.getElementById("hed").style.top = '0';
            document.getElementById("hed").style.left = '0';
            a += 1
        } else if (pos3 > 850*wid && pos3 < 950*wid && pos4 > 100*wid && pos4 < 700*wid && a == 1) {
            document.getElementById("hedmain").style.backgroundImage = 'url("img/Pngtreea piece of paper with_5551760.png")';
            document.getElementById("hed").style.top = '0';
            document.getElementById("hed").style.left = '0';
            a += 1
        } else if (pos3 > 300*wid && pos3 < 450*wid && pos4 > 100*wid && pos4 < 700*wid && a == 2) {
            document.getElementById("hedmain").style.backgroundImage = 'url("img/pngwing.com (23).png")';
            document.getElementById("hed").style.top = '0';
            document.getElementById("hed").style.left = '0';
            a += 1
        } else if (pos3 > 1100*wid && pos3 < 1200*wid && pos4 > 100*wid && pos4 < 700*wid && a == 3) {
            document.getElementById("hedmain").style.backgroundImage = 'url("img/Pngtreejar glass closed by golden_5307838.png';
            document.getElementById("hed").style.top = '0';
            document.getElementById("hed").style.left = '0';
            a += 1
        } else if (pos3 > 600*wid && pos3 < 750*wid && pos4 > 100*wid && pos4 < 700*wid && a == 4) {
            document.getElementById("hedmain").style.display = 'none';
            document.querySelector(".glip").style.display = "block";
            document.querySelector(".restart").style.display = "block";
            document.querySelector(".continues").style.display = "block";
            document.querySelector("html").style.backgroundImage = 'url("img/purple_sunset_on_the_beach_4-other.jpg")';
            document.getElementById("hed").style.display = 'none';
            a += 1
        }
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
let num = [0, 30, 110, 190, 270, 350, 430, 510, 590];
$("#continue").click(function() {
    if (num[num.length - 1] != 30) {
        for (i = 1; i < 9; i++) {
            num[i] = num[i] - 80
            $(".numb" + i).animate({
                left: `${num[i]}%`
            }, "slow");
        }
    }
})
$("#continue1").click(function() {
    if (num[1] != 30) {
        for (i = 1; i < 9; i++) {
            num[i] = num[i] + 80
            $(".numb" + i).animate({
                left: `${num[i]}%`
            }, "slow");
        }
    }
})
a = 0

function summarize() {
    if (a % 2 == 0) {
        document.querySelector("span").innerHTML = "Зворотньо";
        document.querySelector(".p1").style.display = "none";
        document.querySelector(".p2").style.display = "block";
    } else {
        document.querySelector("span").innerHTML = "Підсумувати";
        document.querySelector(".p1").style.display = "block";
        document.querySelector(".p2").style.display = "none";
    }
    a += 1
}
var backs = ['future.html'];

function back(a) {
    if (a == 0) {
        $(location).attr('href', 'future.html');
    } else if (a == 1) {
        $(location).attr('href', 'main.html');
    } else if (a == 2) {
        $(location).attr('href', 'right.html');
    } else if (a == 3) {
        $(location).attr('href', 'left.html');
    }
}