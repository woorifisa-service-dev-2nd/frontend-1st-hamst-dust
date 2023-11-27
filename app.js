var num = 0;

function func(input) {
    if (num==input) {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)+1;
        document.getElementById('num'+input).setAttribute("src","dust.png");
        random();
    }
    else {
        document.getElementById('success').innerText = parseInt(document.getElementById('success').innerText)-1;
        console.log(document.getElementById('num'+input));
    }
}

function random() {
        let rannum = 1+Math.floor(Math.random() * 9);
        let newid = 'num' + rannum;
        document.getElementById(newid).setAttribute("src","hamst.png");
        num = rannum;
}

random();