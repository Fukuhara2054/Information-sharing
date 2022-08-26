document.getElementById("okiniiri_on_btn").style.display = 'none';
document.getElementById("okiniiri_off_btn").style.display = 'block';
document.getElementById("honbun").style.display = 'none';

function set_okiniiri() {
    target1 = document.getElementById("okiniiri_on_btn");
    target2 = document.getElementById("okiniiri_off_btn");

    if (target1.style.display == "block") {
        target1.style.display = "none";
        target2.style.display = "block";
    } else {
        target1.style.display = "block";
        target2.style.display = "none";
    }
}

function update_honbun() {
    target1 = document.getElementById("honbun");
    target2 = document.getElementById("yajirushi");
    if (target1.style.display == "block") {
        target1.style.display = "none";
        target2.innerText = "↓";
    } else {
        target1.style.display = "block";
        target2.innerText = "↑";
    }
}

