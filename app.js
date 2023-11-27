var num = 0;

function func1() {
    if (num==1) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num1').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num1'));
    }
}

function func2() {
    if (num==2) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num2').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num2').src);
    }
}
function func3() {
    if (num==3) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num3').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num3').src);
    }
}
function func4() {
    if (num==4) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num4').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num4').src);
    }
}
function func5() {
    if (num==5) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num5').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num5').src);
    }
}
function func6() {
    if (num==6) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num6').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num6').src);
    }
}
function func7() {
    if (num==7) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num7').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num7').src);
    }
}
function func8() {
    if (num==8) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num8').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num8').src);
    }
}
function func9() {
    if (num==9) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num9').setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num9').src);
    }
}

function random() {
        let rannum = Math.floor(Math.random() * 10);
        let newid = 'num' + rannum;
        document.getElementById(newid).setAttribute("src","hamst.png");
        num = rannum;
}

random();