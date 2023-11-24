function func() {
    if (document.getElementById('num1').src == 'hamst.png') {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num1').setAttribute("src","dust.png");
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
    }
}

//document.getElementById('num1').addEventListener('onclick',func());

function random() {
        let rannum = Math.floor(Math.random() * 10);
        document.getElementById('num'+rannum).setAttribute("src","hamst.png");
        sleep(300);
}

while (true) {
    random();
}