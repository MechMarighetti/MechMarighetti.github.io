function relojMio() {
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    let time = `${hh}:${mm}:${ss}`;

    console.log(date);
    document.getElementById("clock").innerText = time;
    let t = setTimeout(function(){ relojMio() }, 1000);
}


relojMio();

