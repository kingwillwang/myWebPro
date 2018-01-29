window.onload = init;
var time = null;
function init() {
    clearTimeout(time);
    time = setTimeout(shake,2700);
}

function shake() {
    $("#p1_muyu_change").removeClass("p1_muyu").addClass("p1_muyu_after");
}
